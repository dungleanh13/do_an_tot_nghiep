package com.example.demo.model.repository.user;

import com.example.demo.model.entity.user.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IAppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUserName(String userName);
}
