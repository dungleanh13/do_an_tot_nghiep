package com.example.demo.model.service.impl;

import com.example.demo.model.entity.contract.AttachService;
import com.example.demo.model.entity.contract.Contract;
import com.example.demo.model.repository.contract.IAttachServiceRepository;
import com.example.demo.model.repository.contract.IContractRepository;
import com.example.demo.model.service.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractRepository contractRepository;

    @Override
    public void save(Contract contract) {
        contractRepository.save(contract);
    }


    @Override
    public List<Contract> findAllContract() {
        return contractRepository.findAll();
    }

    @Override
    public Optional<Contract> findById(Long id) {
        return contractRepository.findById(id);
    }
}