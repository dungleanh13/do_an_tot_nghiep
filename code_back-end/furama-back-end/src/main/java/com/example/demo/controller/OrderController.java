package com.example.demo.controller;

import com.example.demo.dto.ContractDetailDto;
import com.example.demo.model.repository.user.IAppUserRepository;
import com.example.demo.model.service.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private IContractService contractService;
//    @Autowired
//    private IContractDetailService contractDetailService;

    @Autowired
    private IAppUserRepository appUserRepository;

    @GetMapping
    public String getListOrder(Model model, Principal principal) {
//        List<AttachService> attachServiceList = contractDetailService.listAttachService();
        model.addAttribute("contractDetailDto", new ContractDetailDto());
//        model.addAttribute("attachServices", attachServiceList);
        return "/order/list";
    }
}
