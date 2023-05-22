package com.example.demo.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RomUpdate {
    private String roomCode;
    private String roomArea;
    private Integer roomCost;
    private String descriptionOtherConvenience;
    private Integer numberOfFloors;
    private String status;
    private String roomName;
    private String img;
}
