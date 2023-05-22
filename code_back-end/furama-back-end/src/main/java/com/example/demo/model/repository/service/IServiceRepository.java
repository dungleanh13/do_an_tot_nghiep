package com.example.demo.model.repository.service;

import com.example.demo.model.entity.service.InfoRoom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IServiceRepository extends JpaRepository<InfoRoom, Long> {

    Page<InfoRoom> findAll(Pageable pageable);

    @Query(value = "select * from info_room as room where room.is_use = false", nativeQuery = true)
    Page<InfoRoom> search(Pageable pageable);

    List<InfoRoom> findAllByInfoRoomIdIn(List<Long> listRoomIds);
}