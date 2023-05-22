package com.example.demo.model.service.impl;


import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.entity.user.UserRole;
import com.example.demo.model.repository.user.IAppRoleRepository;
import com.example.demo.model.repository.user.IRoleUserRepository;
import com.example.demo.model.service.IUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRoleServiceImpl implements IUserRoleService {
    @Autowired
    private IRoleUserRepository userRoleRepository;
    @Autowired
    private IAppRoleRepository appRoleRepository;
    @Override
    public void save(AppUser appUser, Long id) {
            this.userRoleRepository.save(new UserRole(appUser,this.appRoleRepository.findById(id).orElse(null)));
    }
}
