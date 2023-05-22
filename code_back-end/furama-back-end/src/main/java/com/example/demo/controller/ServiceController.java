package com.example.demo.controller;

import com.example.demo.dto.CreateRoom;
import com.example.demo.dto.RomUpdate;
import com.example.demo.model.entity.contract.Contract;
import com.example.demo.model.entity.contract.ContractRoom;
import com.example.demo.model.entity.service.InfoRoom;
import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.repository.contract.IContractRepository;
import com.example.demo.model.repository.contract.IContractRoomRepository;
import com.example.demo.model.repository.user.IAppUserRepository;
import com.example.demo.model.service.IServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Controller
@CrossOrigin("*")
@RequestMapping(value = "/services")

public class ServiceController {
    @Autowired
    private IServiceService serviceService;

    @Autowired
    private IContractRepository contractRepository;

    @Autowired
    private IAppUserRepository appUserRepository;


    @Autowired
    private IContractRoomRepository iContractRoomRepository;



    @GetMapping(value = "")
    public ResponseEntity<Object> showListServices() {
        List<InfoRoom> infoRooms = serviceService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(infoRooms);
    }

    @GetMapping(value = "/getStatusRoom/{room_id}")
    public ResponseEntity<Object> getStatusRoom(@PathVariable(value = "room_id") String roomId,
                                                @RequestParam(value = "start_date",
                                                        required = false, defaultValue = "") String startDate,
                                                @RequestParam(value = "user_id") String userId) {
        InfoRoom infoRoom = serviceService.findById(Long.valueOf(roomId)).orElse(null);
        AppUser appUser = appUserRepository.findById(Long.valueOf(userId)).orElse(null);
        if (Objects.isNull(infoRoom) || Objects.isNull(appUser))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        List<ContractRoom> contractRooms = iContractRoomRepository.findAllByInfoRoomId(roomId);
        contractRooms.forEach(item -> {
            if (!Objects.equals(startDate, "") && Objects.nonNull(item) &&
                    LocalDate.parse(startDate).isAfter(LocalDate.parse(item.getContractEndDate())))
                infoRoom.setStatus("Trống");
        });
        return ResponseEntity.status(HttpStatus.OK).body(infoRoom.getStatus());
    }


    @PostMapping(value = "/create-room")
    public ResponseEntity<Object> createRoom(@RequestBody @RequestPart CreateRoom createRoom) {
        InfoRoom infoRoom = new InfoRoom(createRoom);
        serviceService.save(infoRoom);
        return ResponseEntity.status(HttpStatus.OK).body(infoRoom);
    }

    @PostMapping(value = "/update-room/{room_id}")
    public ResponseEntity<Object> createRoom(@PathVariable(value = "room_id") String roomId,
                                             @RequestBody @RequestPart RomUpdate romUpdate) {
        InfoRoom infoRoom = serviceService.findById(Long.valueOf(roomId)).orElse(null);
        if (Objects.isNull(infoRoom))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        updateRoom(romUpdate, infoRoom);
        return ResponseEntity.status(HttpStatus.OK).body(infoRoom);
    }

    private void updateRoom(RomUpdate romUpdate, InfoRoom infoRoom) {
        infoRoom.setRoomArea(Double.parseDouble(romUpdate.getRoomArea()));
        infoRoom.setRoomCost(romUpdate.getRoomCost());
        infoRoom.setRoomCode(romUpdate.getRoomCode());
        infoRoom.setImg(romUpdate.getImg());
        infoRoom.setRoomName(romUpdate.getRoomName());
        infoRoom.setDescriptionOtherConvenience(romUpdate.getDescriptionOtherConvenience());
        infoRoom.setStatus(romUpdate.getStatus());
        infoRoom.setNumberOfFloors(romUpdate.getNumberOfFloors());
        serviceService.save(infoRoom);
    }

    @PostMapping(value = "/delete-room/{room_id}")
    public ResponseEntity<Object> deleteRoom(@PathVariable(value = "room_id") String roomId) {
        InfoRoom infoRoom = serviceService.findById(Long.valueOf(roomId)).orElse(null);
        if (Objects.isNull(infoRoom))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        serviceService.remove(Long.valueOf(roomId));
        return ResponseEntity.status(HttpStatus.OK).body(null);

    }
}