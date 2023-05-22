package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServiceDto {
    private  Long serviceId;
    private  String serviceName;
    private  String serviceCode;
    private int serviceArea;
    private double serviceCost;
    private int serviceMaxPeople;
    private String standardRoom;
    private String descriptionOtherConvenience;

    private  double poolArea;

    private int numberOfFloors;
}