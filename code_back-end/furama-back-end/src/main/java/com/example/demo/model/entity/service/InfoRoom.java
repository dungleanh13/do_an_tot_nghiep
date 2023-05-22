package com.example.demo.model.entity.service;

import com.example.demo.dto.CreateRoom;
import com.example.demo.model.entity.contract.Contract;
import com.example.demo.model.entity.contract.ContractRoom;
import com.example.demo.model.entity.room_attach.RoomAttach;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "info_room")
public class InfoRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long infoRoomId;
    private String roomCode;

    private double roomArea;
    private Integer roomCost;
    private int roomMaxPeople;
    private String descriptionOtherConvenience;
    private double poolArea;
    private int numberOfFloors;
    private String status;
    private String roomName;
    @Column(columnDefinition = "LONGTEXT")
    private String img;

    @JsonBackReference
    @OneToMany(mappedBy = "services")
    private List<RoomAttach> roomAttachList;

    public InfoRoom(CreateRoom createRoom) {
        this.descriptionOtherConvenience = createRoom.getDescriptionOtherConvenience();
        this.numberOfFloors = createRoom.getNumberOfFloors();
        this.roomArea = createRoom.getRoomArea();
        this.roomCode = createRoom.getRoomCode();
        this.img = createRoom.getImg();
        this.roomName = createRoom.getRoomName();
        this.status = "Trống";
    }
}