package com.example.demo.model.service;


import com.example.demo.model.entity.user.AppUser;

public interface IUserRoleService {
    void save(AppUser appUser, Long id);
}