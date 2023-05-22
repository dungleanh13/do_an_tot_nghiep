package com.example.demo.model.entity.room_attach;

import com.example.demo.model.entity.contract.AttachService;
import com.example.demo.model.entity.service.InfoRoom;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity
@Table(name = "room_attach", //
        uniqueConstraints = { //
                @UniqueConstraint(name = "ROOM_ATTACH_UK", columnNames = {"info_roomId", "Attach_Id"})})
public class RoomAttach {
    @Id
    @GeneratedValue
    @Column(name = "Id", nullable = false)
    private Long id;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "info_roomId", nullable = false)
    private InfoRoom services;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Attach_Id", nullable = false)
    private AttachService attachService;
}
