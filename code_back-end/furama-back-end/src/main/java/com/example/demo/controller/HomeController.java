package com.example.demo.controller;


import com.example.demo.dto.LoginRes;
import com.example.demo.dto.RegisterDTO;
import com.example.demo.dto.UserRequest;
import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.entity.user.UserRole;
import com.example.demo.model.repository.user.IAppRoleRepository;
import com.example.demo.model.repository.user.IAppUserRepository;
import com.example.demo.model.repository.user.IRoleUserRepository;
import com.example.demo.model.util.EncrytedPasswordUtils;
import com.example.demo.model.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


@Controller
@CrossOrigin("*")
public class HomeController {

    @Autowired
    private IAppUserRepository appUserRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private IAppRoleRepository iAppRoleRepository;

    @Autowired
    private IRoleUserRepository iRoleUserRepository;

    @GetMapping
    public String showHome(Principal principal, Model model) {
        if (principal != null) {
            User loginedUser = (User) ((Authentication) principal).getPrincipal();
            String userInfo = WebUtils.toString(loginedUser);
            model.addAttribute("userInfo", userInfo);
        }
        return "/home";
    }

    @GetMapping(value = "/register")
    public String register(Model model) {
        RegisterDTO registerDTO = new RegisterDTO();
        model.addAttribute("registerDTO", registerDTO);
        return "/Register";
    }

    @Transactional
    @PostMapping(value = "/register")
    public ResponseEntity<Object> registerSave(@RequestBody @RequestPart RegisterDTO registerDTO) {
        AppUser user = new AppUser();
        user.setUserName(registerDTO.getUserName());
        user.setEncrytedPassword(EncrytedPasswordUtils.encrytePassword(registerDTO.getPassWord()));
        user.setFullName(registerDTO.getFulName());
        user.setAddress(registerDTO.getAddress());
        user.setBirthday(registerDTO.getBirthday());
        user.setPhone(registerDTO.getPhone());
        user.setGender(registerDTO.getGender());
        user.setEmail(registerDTO.getEmail());
        appUserRepository.save(user);
        List<UserRole> userRoles = iRoleUserRepository.findByAppUser(user);
        List<GrantedAuthority> grantList = new ArrayList<>();
        if (userRoles != null) {
            for (UserRole role : userRoles) {
                GrantedAuthority authority = new SimpleGrantedAuthority(role.getAppRole().getRoleName());
                grantList.add(authority);
            }
        }
        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(String.valueOf(user.getUserName()), registerDTO.getPassWord(), grantList);
        Authentication auth = authenticationManager.authenticate(authToken);
        if (Objects.isNull(auth) || !auth.isAuthenticated())
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
        SecurityContextHolder.getContext().setAuthentication(authToken);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<Object> loginPage(@RequestBody @RequestPart UserRequest userRequest) {
        AppUser appUser = appUserRepository.findByUserName(userRequest.getUserName());

        List<UserRole> userRoles = iRoleUserRepository.findByAppUser(appUser);
        List<GrantedAuthority> grantList = new ArrayList<>();
        if (userRoles != null) {
            for (UserRole role : userRoles) {
                GrantedAuthority authority = new SimpleGrantedAuthority(role.getAppRole().getRoleName());
                grantList.add(authority);
            }
        }

        if (Objects.isNull(appUser))
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(String.valueOf(appUser.getUserName()), userRequest.getPassword(), grantList);
        Authentication auth = authenticationManager.authenticate(authToken);
        if (Objects.isNull(auth) || !auth.isAuthenticated())
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
        SecurityContextHolder.getContext().setAuthentication(authToken);
        boolean isAdmin = userRoles.stream().filter(item -> item.getAppRole().getRoleName().equals("ROLE_ADMIN")).collect(Collectors.toList()).size() > 0;
        return ResponseEntity.status(HttpStatus.OK).body(new LoginRes(appUser, isAdmin));
    }

    @PostMapping(value = "/user/logout")
    public ResponseEntity<Object> logout() {
        SecurityContextHolder.getContext().setAuthentication(null);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @GetMapping(value = "/user/user-role/{user_id}")
    public ResponseEntity<Object> getUserRole(@PathVariable(value = "user_id") String userId) {
        AppUser appUser = appUserRepository.findById(Long.valueOf(userId)).orElse(null);
        if (Objects.isNull(appUser))
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        List<UserRole> userRoles = iRoleUserRepository.findByAppUser(appUser);
        return ResponseEntity.status(HttpStatus.OK).body(userRoles);
    }

    @GetMapping(value = "/user/list-account")
    public ResponseEntity<Object> hetListAccount() {
        List<AppUser> appUsers = appUserRepository.findAll();
        List<LoginRes> loginRes = appUsers.stream().map(LoginRes::new).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(loginRes);
    }

    @Transactional
    @PostMapping(value = "/user/delete/{user_id}")
    public ResponseEntity<Object> deleteUser(@PathVariable(value = "user_id") String userId) {
        AppUser appUser = appUserRepository.findById(Long.valueOf(userId)).orElse(null);
        if (Objects.isNull(appUser))
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        List<UserRole> userRoles = iRoleUserRepository.findByAppUser(appUser);
        iRoleUserRepository.deleteAll(userRoles);
        appUserRepository.delete(appUser);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}