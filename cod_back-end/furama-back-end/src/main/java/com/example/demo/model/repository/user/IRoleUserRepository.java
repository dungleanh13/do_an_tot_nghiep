package com.example.demo.model.repository.user;


import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.entity.user.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IRoleUserRepository extends JpaRepository<UserRole,Long> {
    List<UserRole> findByAppUser(AppUser appUser);

    @Query(value = "insert INTO user_role", nativeQuery = true)
    UserRole save(AppUser appUser);
}
