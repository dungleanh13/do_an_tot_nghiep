package com.example.demo.model.entity.service;

import com.example.demo.model.entity.contract.Contract;
import com.example.demo.model.entity.room_attach.RoomAttach;
import com.example.demo.model.service.IServiceService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.OneToMany;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseObject {
    private Long infoRoomId;
    private String roomCode;
    private int roomArea;
    private Integer roomCost;
    private int roomMaxPeople;
    private String descriptionOtherConvenience;
    private double poolArea;
    private int numberOfFloors;

    private boolean isUse;

    private String roomName;

    private String img;

    @OneToMany(mappedBy = "services")
    private List<RoomAttach> roomAttachList;


    @OneToMany(mappedBy = "infoRoom")
    private List<Contract> contractList;
}
