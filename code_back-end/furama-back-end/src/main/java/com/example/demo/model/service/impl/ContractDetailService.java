package com.example.demo.model.service.impl;//package com.codegym.model.service.impl;
//
//import com.codegym.dto.IContractDetailTotalDto;
//import com.codegym.model.entity.contract.AttachService;
//import com.codegym.model.entity.contract.ContractDetail;
//import com.codegym.model.repository.contract.IAttachServiceRepository;
//import com.codegym.model.repository.contract.IContractDetailRepository;
//import com.codegym.model.service.IContractDetailService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class ContractDetailService implements IContractDetailService {
//    @Autowired
//    private IContractDetailRepository contractDetailRepository;
//    @Autowired
//    private IAttachServiceRepository attachServiceRepository;
//
//
//    @Override
//    public Optional<ContractDetail> findAllById(Long id) {
//        return contractDetailRepository.findById(id);
//    }
//
//    @Override
//    public Page<ContractDetail> findAll(Pageable pageable) {
//        return contractDetailRepository.findAll(pageable);
//    }
//
//    @Override
//    public void save(ContractDetail contractDetail) {
//        contractDetailRepository.save(contractDetail);
//    }
//
//    @Override
//    public List<IContractDetailTotalDto> toTal() {
//        return contractDetailRepository.toTal();
//    }
//
//
//    @Override
//    public List<AttachService> listAttachService() {
//        return attachServiceRepository.findAll();
//    }
//
//    @Override
//    public List<ContractDetail> findAllByContract_ContractId(Long id) {
//        return contractDetailRepository.findAllByContract_ContractId(id);
//    }
//}