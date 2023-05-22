package com.example.demo.controller;//package com.codegym.controller;
//
//import com.codegym.dto.ContractDetailDto;
//import com.codegym.model.entity.contract.AttachService;
//import com.codegym.model.entity.contract.Contract;
//import com.codegym.model.entity.contract.ContractDetail;
//import com.codegym.model.service.IContractDetailService;
//import com.codegym.model.service.IContractService;
//import org.springframework.beans.BeanUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.servlet.mvc.support.RedirectAttributes;
//
//import javax.validation.Valid;
//import java.util.List;
//
//@Controller
//@RequestMapping(value = "/contract_details")
//public class ContractDetailController {
//    @Autowired
//    private IContractDetailService contractDetailService;
//    @Autowired
//    private IContractService contractService;
//
//    @ModelAttribute("attachServices")
//    public List<AttachService> attachServices(){
//        return contractDetailService.listAttachService();
//    }
//    @ModelAttribute(value = "contracts")
//    public List<Contract> contractList(){
//        return contractService.findAllContract();
//    }
//
//    @GetMapping(value = "create")
//    public String showCreateContractDetail(Model model) {
//        model.addAttribute("contractDetailDto", new ContractDetailDto());
//        return "/contractDetail/create";
//    }
//
//    @PostMapping(value = "save")
//    public String saveService(@Valid @ModelAttribute ContractDetailDto contractDetailDto,
//                              BindingResult bindingResult, RedirectAttributes redirectAttributes) {
//
//        if (bindingResult.hasErrors()) {
//            return "contractDetail/create";
//        }
//        ContractDetail contractDetail = new ContractDetail();
//        BeanUtils.copyProperties(contractDetailDto, contractDetail);
//        this.contractDetailService.save(contractDetail);
//        redirectAttributes.addFlashAttribute("success", "Create AttachService Successfully!");
//        return "redirect:/customerUseService";
//    }
//
//}