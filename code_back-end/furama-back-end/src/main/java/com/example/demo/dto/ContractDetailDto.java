package com.example.demo.dto;

import com.example.demo.model.entity.contract.AttachService;
import com.example.demo.model.entity.contract.Contract;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ContractDetailDto {
    private Long contractDetailId;
    private Integer quantity;
    private AttachService attachService;
    private Contract contract;
}