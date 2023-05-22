package com.example.demo.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;
@Data
@NoArgsConstructor
public class CreateRoom {
    private String img;
    private String descriptionOtherConvenience;
    private Integer numberOfFloors;
    private double roomArea;
    private Integer roomCost;
    private String roomCode;
    private String roomName;
}
