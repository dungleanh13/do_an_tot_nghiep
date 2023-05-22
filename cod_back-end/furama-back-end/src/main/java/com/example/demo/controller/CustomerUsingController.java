package com.example.demo.controller;//package com.codegym.controller;
//
//import com.codegym.model.entity.contract.Contract;
//import com.codegym.model.entity.contract.ContractDetail;
//import com.codegym.model.service.IContractService;
//import com.codegym.model.service.impl.ContractDetailService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.web.PageableDefault;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import java.util.List;
//import java.util.Optional;
//
//@Controller
//@RequestMapping(value = "/customerUseService")
//public class CustomerUsingController {
//
//    @Autowired
//    private IContractService contractService;
//    @Autowired
//    private ContractDetailService contractDetailService;
//
//    @GetMapping({""})
//    public String customerUseService(@PageableDefault(value = 3) Pageable pageable, @RequestParam Optional<String> customerName,
//                                     Model model) {
//
//        String keywordCustomerName = "";
//        if (customerName.isPresent()){
//            keywordCustomerName = customerName.get();
//        }
//
//        Page<Contract> contractList = contractService.findAll(pageable, keywordCustomerName);
//        for (Contract contract : contractList) {
//            List<ContractDetail> contractDetailList = contractDetailService.findAllByContract_ContractId(contract.getContractId());
//            Double totalMoney = contract.getContractTotalMoney() - contract.getContractDeposit();
//
//            for (ContractDetail contractDetail : contractDetailList) {
//                totalMoney += contractDetail.getAttachService().getAttachServiceCost() * contractDetail.getQuantity();
//            }
//            contract.setContractTotalMoney(totalMoney);
//        }
//
//        model.addAttribute("contractDetailOther", contractDetailService.toTal());
//        model.addAttribute("contractList", contractList);
//        model.addAttribute("keywordCustomerName", keywordCustomerName);
//
//        return "/customer/customer-use-service";
//    }
//}
