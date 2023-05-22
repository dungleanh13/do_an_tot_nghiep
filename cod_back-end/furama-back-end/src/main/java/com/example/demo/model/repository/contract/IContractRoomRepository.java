package com.example.demo.model.repository.contract;

import com.example.demo.model.entity.contract.ContractRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IContractRoomRepository extends JpaRepository<ContractRoom, Long> {

    List<ContractRoom> findAllByContractCode(String contractCode);

    List<ContractRoom> findAllByInfoRoomId(String infoRoomId);
}
