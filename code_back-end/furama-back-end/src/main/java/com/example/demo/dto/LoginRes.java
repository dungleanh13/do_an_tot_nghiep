package com.example.demo.dto;

import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.entity.user.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginRes {

    @JsonProperty("user_id")
    private Long userId;
    @JsonProperty("user_name")
    private String userName;
    private String password;

    private boolean enabled;
    private String fullName;
    private String birthday;
    private String gender;
    private String phone;
    private String email;
    private String address;

    private boolean isAdmin = false;

    public LoginRes(AppUser appUser, boolean isAdmin) {
        this.userId = appUser.getUserId();
        this.userName = appUser.getUserName();
        this.password = appUser.getEncrytedPassword();
        this.enabled = appUser.isEnabled();
        this.fullName = appUser.getFullName();
        this.birthday = appUser.getBirthday();
        this.gender = appUser.getGender();
        this.phone = appUser.getPhone();
        this.email = appUser.getEmail();
        this.address = appUser.getAddress();
        this.isAdmin = isAdmin;
    }

    public LoginRes(AppUser appUser) {
        this.userId = appUser.getUserId();
        this.userName = appUser.getUserName();
        this.password = appUser.getEncrytedPassword();
        this.enabled = appUser.isEnabled();
        this.fullName = appUser.getFullName();
        this.birthday = appUser.getBirthday();
        this.gender = appUser.getGender();
        this.phone = appUser.getPhone();
        this.email = appUser.getEmail();
        this.address = appUser.getAddress();
        this.isAdmin = isAdmin;
    }

}
