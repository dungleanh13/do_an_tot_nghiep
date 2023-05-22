package com.example.demo.model.entity.contract;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "attachServiceId")
public class AttachService {
    @Id
    private Long attachServiceId;
    private String attachServiceName;
    private Double attachServiceCost;
//    private Integer attachServiceUnit;
//    private String attachServiceStatus;

//    @OneToMany(mappedBy = "attachService")
//    private List<ContractDetail> contractDetails;


}
