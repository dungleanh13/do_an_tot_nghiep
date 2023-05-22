package com.example.demo.controller;


import com.example.demo.dto.ContractRes;
import com.example.demo.dto.CreateContract;
import com.example.demo.dto.InformCreate;
import com.example.demo.dto.UpdateContract;
import com.example.demo.model.entity.contract.Contract;
import com.example.demo.model.entity.contract.ContractRoom;
import com.example.demo.model.entity.service.InfoRoom;
import com.example.demo.model.entity.user.AppUser;
import com.example.demo.model.repository.contract.IContractRepository;
import com.example.demo.model.repository.contract.IContractRoomRepository;
import com.example.demo.model.repository.service.IServiceRepository;
import com.example.demo.model.repository.user.IAppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Controller
@CrossOrigin("*")
@RequestMapping(value = "contracts")
public class ContractController {

    @Autowired
    private IContractRepository contractRepository;

    @Autowired
    private IContractRoomRepository iContractRoomRepository;

    @Autowired
    private IAppUserRepository appUserRepository;

    @Autowired
    private IServiceRepository serviceRepository;


    @GetMapping(value = "/getListContract/{user_id}")
    public ResponseEntity<Object> getListContractForUser(@PathVariable(value = "user_id") String userId) {
        AppUser appUser = appUserRepository.findById(Long.valueOf(userId)).orElse(null);
        if (Objects.isNull(appUser))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        List<Contract> contractList = contractRepository.findAllByAppUser(appUser);
        List<ContractRes> contractRes = contractList.stream().map(ContractRes::new).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(contractRes);
    }

    @GetMapping(value = "/getListContractRoom")
    public ResponseEntity<Object> getListContractRoomWithContractCode(@RequestParam(value = "contract_code") String contractCode) {
        List<ContractRoom> contractRooms = iContractRoomRepository.findAllByContractCode(contractCode);
        return ResponseEntity.status(HttpStatus.OK).body(contractRooms);
    }


    @GetMapping(value = "/getAllContract")
    public ResponseEntity<Object> getAllContract() {
        List<Contract> contractList = contractRepository.findAll();
        List<ContractRes> contractRes = contractList.stream().map(ContractRes::new).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(contractRes);
    }


    @DeleteMapping(value = "/update-contract-room/{contract_room_id}")
    public ResponseEntity<Object> deleteContractRoom(@PathVariable(value = "contract_room_id") String contractRoomId) {
        ContractRoom contractRoom = iContractRoomRepository.findById(Long.valueOf(contractRoomId)).orElse(null);
        if (Objects.isNull(contractRoom))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        iContractRoomRepository.delete(contractRoom);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @PostMapping(value = "/update-contract-room/{contract_room_id}")
    public ResponseEntity<Object> updateContractRoom(@PathVariable(value = "contract_room_id") String contractRoomId,
                                                     @RequestBody @RequestPart UpdateContract updateContract) {
        ContractRoom contractRoom = iContractRoomRepository.findById(Long.valueOf(contractRoomId)).orElse(null);
        if (Objects.isNull(contractRoom))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        Contract contract = contractRepository.findByContractCode(contractRoom.getContractCode());
        if (Objects.equals(updateContract.getStatus(), "Hủy")) {
            contract.setTotalMoney(contract.getTotalMoney() - contractRoom.getMoney());
            contractRepository.save(contract);
        }
        contractRoom.setStatus(updateContract.getStatus());
        iContractRoomRepository.save(contractRoom);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


    @GetMapping(value = "/getContractRoom")
    public ResponseEntity<Object> getListContractRoom(@RequestParam(value = "contract_code", required = false) String contractCode) {
        List<ContractRoom> contractRooms = iContractRoomRepository.findAllByContractCode(contractCode);
        return ResponseEntity.status(HttpStatus.OK).body(contractRooms);
    }

    @PostMapping(value = "/update-contracct/{contract_id}")
    public ResponseEntity<Object> updateContract(@PathVariable(value = "contract_id") String contractId,
                                                 @RequestBody @RequestPart UpdateContract updateContract) {
        Contract contract = contractRepository.findById(Long.valueOf(contractId)).orElse(null);
        if (Objects.isNull(contract))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        List<ContractRoom> contractRooms = iContractRoomRepository.findAllByContractCode(contract.getContractCode());
        List<Long> romIds = contractRooms.stream().map(item -> Long.valueOf(item.getInfoRoomId())).collect(Collectors.toList());
        List<InfoRoom> infoRooms = serviceRepository.findAllByInfoRoomIdIn(romIds);
        contractRooms.forEach(item -> {
            item.setStatus(updateContract.getStatus());
        });
        contract.setStatus(updateContract.getStatus());
        contractRepository.save(contract);
        iContractRoomRepository.saveAll(contractRooms);
        infoRooms.forEach(item -> item.setStatus("Trống"));
        serviceRepository.saveAll(infoRooms);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @PostMapping(value = "/create-contract")
    public ResponseEntity<Object> createContract(@RequestBody @RequestPart CreateContract createContract) {
        AppUser appUser = appUserRepository.findById(Long.valueOf(createContract.getUserId())).orElse(null);
        List<InformCreate> informCreateList = createContract.getInformCreateList();
        saveContract(informCreateList, appUser, createContract);
        return ResponseEntity.status(HttpStatus.OK).body(null);
    }

    @Transactional
    public void saveContract(List<InformCreate> informCreateList, AppUser appUser, CreateContract createContract) {
        List<ContractRoom> contractRooms = new ArrayList<>();
        List<InfoRoom> infoRooms = new ArrayList<>();
        informCreateList.forEach(item -> {
            InfoRoom infoRoom = serviceRepository.findById(Long.valueOf(item.getInfoRoomId())).orElse(null);
            infoRoom.setStatus("Đã dược đặt");
            ContractRoom contractRoom = new ContractRoom();
            contractRoom.setContractStartDate(item.getStartDate());
            contractRoom.setContractEndDate(item.getEndDate());
            contractRoom.setInfoRoomId(item.getInfoRoomId());
            contractRoom.setRoomName(infoRoom.getRoomName());
            contractRoom.setStatus("Chờ nhận phòng");
            contractRoom.setMoney((int) (item.getRoomCost() * item.getTotalDate()));
            contractRoom.setContractCode(createContract.getContractCode());
            contractRooms.add(contractRoom);
            infoRooms.add(infoRoom);
        });
        Contract contract = new Contract();
        contract.setStatus("Chưa thanh toán");
        contract.setContractCode(createContract.getContractCode());
        contract.setTotalMoney(createContract.getContractDeposit());
        contract.setAppUser(appUser);
        contractRepository.save(contract);
        serviceRepository.saveAll(infoRooms);
        iContractRoomRepository.saveAll(contractRooms);
    }
}