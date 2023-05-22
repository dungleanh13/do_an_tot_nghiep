package com.example.demo.model.service.impl;

import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.repository.user.IAppUserRepository;
import com.example.demo.model.service.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserServiceImpl implements IAppUserService {
    @Autowired
    private IAppUserRepository appUserRepository;
    @Override
    public AppUser findByUserName(String userName) {
        return appUserRepository.findByUserName(userName);
    }

    @Override
    public void save(AppUser appUser) {
        appUserRepository.save(appUser);
    }

    @Override
    public List<AppUser> findAll() {
        return appUserRepository.findAll();
    }
}
