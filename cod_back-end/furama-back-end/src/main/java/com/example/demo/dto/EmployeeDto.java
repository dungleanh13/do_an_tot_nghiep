package com.example.demo.dto;//package com.codegym.dto;
//
//import com.codegym.model.entity.employee.Division;
//import com.codegym.model.entity.employee.EducationDegree;
//import com.codegym.model.entity.employee.Position;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import org.springframework.validation.Errors;
//import org.springframework.validation.Validator;
//
//import javax.persistence.Column;
//import javax.validation.constraints.*;
//import java.io.File;
//
//@Getter
//@Setter
//@NoArgsConstructor
//public class EmployeeDto {
//    private Long employeeId;
//    @NotBlank(message = "Tên không được để trống!")
//    private String employeeName;
//    @Column(columnDefinition = "DATE")
//    @NotBlank(message = "Vui lòng nhập ngày sinh!")
//    private String employeeBirthday;
//    @NotBlank(message = "IdCard không được để trống")
//    @Pattern(regexp = "^\\d{9}|\\d{12}$", message = "IdCard không đúng định dạng (9 number or 12 number)")
//    private String employeeIdCard;
//    @Min(value = 1, message = "Lương nhân viên phải là số dương lớn hơn 0!")
//    @NotBlank(message = "Vui lòng nhập lương nhân viên")
//    private String employeeSalary;
//    @NotBlank(message = "Vui lòng nhập số điện thoại")
//    @Pattern(regexp = "^090\\d{7}|\\(84\\)\\+90\\d{7}|091\\d{7}|\\(84\\)\\+91\\d{7}$",message = "Số điện thoại không đúng định dạng " +
//            "(090xxxxxxx or 091xxxxxxx or (84)+90xxxxxxx or (84)+91xxxxxxx)")
//    private String employeePhone;
//    @NotBlank(message = "Email không được để trống")
//    @Email(message = "Email không đúng định dạng")
//    private String employeeEmail;
//    @NotBlank(message = "Vui lòng nhập địa chỉ!")
//    private String employeeAddress;
//    private Position position;
//    private Division division;
//    private EducationDegree educationDegree;
//}