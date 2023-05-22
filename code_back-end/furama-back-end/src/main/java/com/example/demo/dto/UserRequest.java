package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class UserRequest {

    @JsonProperty("user_name")
    private String userName;

    @JsonProperty("password")
    private String password;
}
