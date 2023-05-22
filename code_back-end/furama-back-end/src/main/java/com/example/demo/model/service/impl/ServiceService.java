package com.example.demo.model.service.impl;


import com.example.demo.model.entity.service.InfoRoom;
import com.example.demo.model.repository.service.IServiceRepository;
import com.example.demo.model.service.IServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceService implements IServiceService {

    @Autowired
    private IServiceRepository serviceRepository;

    @Override
    public void save(InfoRoom services) {
        serviceRepository.save(services);

    }

    @Override
    public void remove(Long id) {
        serviceRepository.deleteById(id);
    }

    @Override
    public Optional<InfoRoom> findById(Long id) {
        return serviceRepository.findById(id);
    }


    @Override
    public Page<InfoRoom> findAll(Pageable pageable) {
        return serviceRepository.findAll(pageable);
    }

    @Override
    public List<InfoRoom> findAll() {
        return serviceRepository.findAll();
    }


    @Override
    public Page<InfoRoom> search(Pageable pageable, String rentType, String serviceType, String serviceName) {
        return serviceRepository.search(pageable);
    }
}