package com.example.demo.model.repository.contract;//package com.codegym.model.repository.contract;
//
//import com.codegym.dto.IContractDetailTotalDto;
//import com.codegym.model.entity.contract.ContractDetail;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface IContractDetailRepository extends JpaRepository<ContractDetail,Long> {
//
//    List<ContractDetail> findAllByContract_ContractId(Long id);
//
//    @Query(value = " select contract_detail.contract_detail_id as contractDetailId, sum(contract_detail.quantity) as quantity , contract_detail.attach_service_id as attachServiceId ," +
//            " contract_detail.contract_id as contractId , attach_service.attach_service_name as attachServiceName " +
//            " from contract_detail " +
//            " join attach_service on contract_detail.attach_service_id = attach_service.attach_service_id " +
//            "group by contract_detail.attach_service_id,contract_detail.contract_id ",nativeQuery = true)
//    List<IContractDetailTotalDto> toTal();
//}