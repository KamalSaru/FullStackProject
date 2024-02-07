package com.atmbackend.atm_backend.service;


import com.atmbackend.atm_backend.entity.AccountHolderDetails;
import com.atmbackend.atm_backend.repository.AccountHolderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountHolderService {
    @Autowired
    private AccountHolderRepository accountHolderRepository;

    //save all the students PostMapping
    public void saveAccountHolderDetails(AccountHolderDetails accountHolderDetails){
        System.out.println("New statement.");
        accountHolderRepository.save(accountHolderDetails);
    }

}
