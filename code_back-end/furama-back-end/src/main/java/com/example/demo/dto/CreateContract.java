package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.List;

@Data
public class CreateContract {

    @JsonProperty("contract_deposit")
    private Integer contractDeposit;

    @JsonProperty("info_room_list")
    private List<InformCreate> informCreateList;

    @JsonProperty("user_id")
    private String userId;

    @JsonProperty("contract_code")
    private String contractCode;
}
