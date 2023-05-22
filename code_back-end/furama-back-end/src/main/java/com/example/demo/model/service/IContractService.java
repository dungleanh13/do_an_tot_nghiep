package com.example.demo.model.service;

import com.example.demo.model.entity.contract.AttachService;
import com.example.demo.model.entity.contract.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface IContractService {

    void save(Contract contract);


    List<Contract> findAllContract();

    Optional<Contract> findById(Long id);

}
