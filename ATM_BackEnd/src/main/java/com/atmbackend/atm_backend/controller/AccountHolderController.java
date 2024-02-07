package com.atmbackend.atm_backend.controller;


import com.atmbackend.atm_backend.entity.AccountHolderDetails;
import com.atmbackend.atm_backend.service.AccountHolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("account")
public class AccountHolderController {
    @Autowired
    private AccountHolderService accountHolderService;

    @PostMapping
    public String saveAccountHolderDetails(@RequestBody AccountHolderDetails accountHolderDetails){
        accountHolderService.saveAccountHolderDetails(accountHolderDetails);
        System.out.println("Account details save.");
        return "Account holder details successfully save!!";
    }

}
