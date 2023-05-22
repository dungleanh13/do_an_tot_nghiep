package com.example.demo.model.repository.user;

import com.example.demo.model.entity.user.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAppRoleRepository extends JpaRepository<AppRole, Long> {

}
