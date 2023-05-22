package com.example.demo.dto;

import com.example.demo.model.entity.user.AppUser;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Setter
@Getter
@NoArgsConstructor
public class CustomerDto {

    private Long customerId;
//    @NotBlank(message = "Tên không được để trống!")
    private String name;
    @Column(columnDefinition = "DATE")
//    @NotBlank(message = "Vui lòng nhập ngày sinh!")
    private String birthday;
//    @NotBlank(message = "Mã khách hàng không được để trống")
//    @Pattern(regexp = "^KH-\\d{4}$", message = "Mã khách hàng không đúng định dạng (KH-xxxx)")
    private String customerCode;
//    @NotBlank(message = "Vui lòng nhập giới tính")
    private String gender;
//    @NotBlank(message = "Id Card không được để trống")
//    @Pattern(regexp = "^\\d{9}|\\d{12}$", message = "Id Card không đúng định dạng (9 or 12 number)")
    private String idCard;
//    @NotBlank(message = "Vui lòng nhập số điện thoại")
//    @Pattern(regexp = "^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$",message = "Số điện thoại không đúng định  dạng " +
//            "(090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx)")
    private String phone;
//    @NotBlank(message = "Vui lòng nhập Email")
//    @Email(message = "Email không đúng định dạng")
    private String email;
//    @NotBlank(message = "Vui lòng nhập địa chỉ")
    private String address;

    private AppUser appUser;

}