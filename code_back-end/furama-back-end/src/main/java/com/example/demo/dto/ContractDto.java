package com.example.demo.dto;


import com.example.demo.model.entity.service.InfoRoom;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ContractDto implements Validator {
    private Long contractId;
    private String contractStartDate ;
    private String contractEndDate ;

    private Double contractDeposit;
    private Double contractTotalMoney;
    private InfoRoom services;

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        ContractDto contractDto = (ContractDto) target;

        try {
            Date contractStartDate = new SimpleDateFormat("yyyy-MM-dd").parse(contractDto.getContractStartDate());
            Date contractEndDate = new SimpleDateFormat("yyyy-MM-dd").parse(contractDto.getContractEndDate());
            if(contractEndDate.before(contractStartDate)){
                errors.rejectValue("contractEndDate", "",
                        "Ngày kết thúc  phải lớn hơn ngày bắt đầu");
            }        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}