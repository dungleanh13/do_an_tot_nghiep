package com.example.demo.model.service.impl;

import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.entity.user.UserRole;
import com.example.demo.model.repository.user.IAppUserRepository;
import com.example.demo.model.repository.user.IRoleUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private IAppUserRepository appUserRepository;

    @Autowired
    private IRoleUserRepository roleUserRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = this.appUserRepository.findByUserName(username);

        if (appUser == null) {
            System.out.println("User not found! " + username);
            throw new UsernameNotFoundException("User " + username + " was not found in the database");
        }

        System.out.println("Found User: " + appUser);

        // [ROLE_USER, ROLE_ADMIN,..]
        List<UserRole> roleNames = this.roleUserRepository.findByAppUser(appUser);

        List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
        if (roleNames != null) {
            for (UserRole role : roleNames) {
                // ROLE_USER, ROLE_ADMIN,..
                GrantedAuthority authority = new SimpleGrantedAuthority(role.getAppRole().getRoleName());
                grantList.add(authority);
            }
        }

        return (UserDetails) new User(appUser.getUserName(), //
                appUser.getEncrytedPassword(), grantList);
    }

}
