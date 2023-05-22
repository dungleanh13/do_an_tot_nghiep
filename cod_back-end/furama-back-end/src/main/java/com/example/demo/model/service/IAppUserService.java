package com.example.demo.model.service;


import com.example.demo.model.entity.user.AppUser;

import java.util.List;

public interface IAppUserService {
    AppUser findByUserName(String userName);
    void save(AppUser appUser);
    List<AppUser> findAll();
}
