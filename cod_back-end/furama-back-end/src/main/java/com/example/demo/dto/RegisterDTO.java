package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDTO {

    @JsonProperty("user_name")
    private String userName;

    @JsonProperty("pass_word")
    private String passWord;

    @JsonProperty("full_name")
    private String fulName;

    @JsonProperty("birthday")
    private String birthday;

    @JsonProperty("gender")
    private String gender;

    @JsonProperty("phone")
    private String phone;

    @JsonProperty("email")
    private String email;
    @JsonProperty("address")
    private String address;
}
