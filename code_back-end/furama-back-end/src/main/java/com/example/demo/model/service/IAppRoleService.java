package com.example.demo.model.service;


import com.example.demo.model.entity.user.AppRole;

import java.util.List;

public interface IAppRoleService {
    List<AppRole> findAll();
    AppRole findById(Long id);
}
