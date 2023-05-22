package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class InformCreate {

    @JsonProperty("infoRoomId")
    private String infoRoomId;

    @JsonProperty("roomCost")
    private Long roomCost;

    @JsonProperty("startDate")
    private String startDate;

    @JsonProperty("endDate")
    private String endDate;

    @JsonProperty("totalDate")
    private Long totalDate;
}
