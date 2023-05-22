package com.example.demo.model.repository.contract;

import com.example.demo.model.entity.contract.Contract;
import com.example.demo.model.entity.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IContractRepository extends JpaRepository<Contract, Long> {
    List<Contract> findAllByAppUser(AppUser appUser);
    Contract findByContractCode(String contractCode);

}
