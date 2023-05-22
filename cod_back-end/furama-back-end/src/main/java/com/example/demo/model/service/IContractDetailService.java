package com.example.demo.model.service;//package com.codegym.model.service;
//
//import com.codegym.dto.IContractDetailTotalDto;
//import com.codegym.model.entity.contract.AttachService;
//import com.codegym.model.entity.contract.ContractDetail;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface IContractDetailService {
//
//    Optional<ContractDetail> findAllById(Long id);
//
//    Page<ContractDetail> findAll(Pageable pageable);
//
//
//    void save(ContractDetail contractDetail);
//
//    List<IContractDetailTotalDto> toTal();
//
//    List<AttachService> listAttachService();
//
//    List<ContractDetail> findAllByContract_ContractId(Long id);
//
//}
