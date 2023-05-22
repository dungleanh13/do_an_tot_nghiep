package com.example.demo.dto;

import com.example.demo.model.entity.contract.Contract;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ContractRes {

    @JsonProperty("contract_id")
    private Long contractId;

    @JsonProperty("user")
    private LoginRes loginRes;

    @JsonProperty("status")
    private String status;

    @JsonProperty("total_money")
    private Integer totalMoney;

    @JsonProperty("contract_code")

    private String contractCode;

    public ContractRes(Contract contract) {
        this.contractId = contract.getContractId();
        this.contractCode = contract.getContractCode();
        this.totalMoney = contract.getTotalMoney();
        this.status = contract.getStatus();
        this.loginRes = new LoginRes(contract.getAppUser());
    }
}
