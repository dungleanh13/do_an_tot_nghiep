package com.example.demo.model.repository.contract;

import com.example.demo.model.entity.contract.AttachService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
@Transactional
public interface IAttachServiceRepository extends JpaRepository<AttachService,Long> {
}