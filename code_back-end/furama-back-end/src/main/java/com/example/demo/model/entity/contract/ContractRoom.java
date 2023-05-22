package com.example.demo.model.entity.contract;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "contractRoomId")
@Table(name = "contract_room")

public class ContractRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long contractRoomId;
    private String infoRoomId;

    private String roomName;

    private String contractCode;

    private String contractStartDate;
    private String contractEndDate;

    private String status;

    private Integer money;
}
