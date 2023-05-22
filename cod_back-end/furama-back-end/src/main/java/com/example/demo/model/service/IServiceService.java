package com.example.demo.model.service;

import com.example.demo.model.entity.service.InfoRoom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IServiceService {
    void save(InfoRoom service);

    void remove(Long id);

    Optional<InfoRoom> findById(Long id);


    Page<InfoRoom> findAll(Pageable pageable);

    List<InfoRoom> findAll();

    Page<InfoRoom> search(Pageable pageable,
                          @Param("rentType") String rentType,
                          @Param("serviceType") String serviceType,
                          @Param("serviceName") String serviceName);


}
