package com.bankaccount.bank_accountbackend.controller;

import com.bankaccount.bank_accountbackend.entity.AccountDetails;
import com.bankaccount.bank_accountbackend.service.AccountDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("accountdetails")
@CrossOrigin("http://localhost:4200/") //Angular connections from java(backend)
public class AccountDetailsController {
    @Autowired
    private AccountDetailsService accountDetailsService;


    //save all the details of account holder from postMapping
    //Create method in first controller and after create method on service
    @PostMapping
    public String saveAccountDetails(@RequestBody AccountDetails accountDetails){
        accountDetailsService.saveAccountDetails(accountDetails);
        return "Account details save successfully!!";
    }

    //Get all the account holder list information
    //First create getAllAccountDetails on controller and Ctrl+click on getAllAccountDetails and create on service
    @GetMapping
    public ResponseEntity<List<AccountDetails>>getAllAccountDetails(){
        return ResponseEntity.ok(accountDetailsService.getAllAccountDetails());
    }

    //Find accountDetails by ID,
    @GetMapping("/{ID}")
    public ResponseEntity<AccountDetails> getAccountDetailsById(@PathVariable("ID") Long ID){
        return ResponseEntity.ok(AccountDetailsService.getAccountDetailsById(ID));

    }

    //Edit and Update the students details
    @PutMapping("/{ID}")
    public ResponseEntity<String >updateAccountDetails(@RequestBody AccountDetails accountDetails, @PathVariable("ID") Long ID){
        return ResponseEntity.ok(accountDetailsService.updateAccountDetails(accountDetails, ID));
    }

    //Delete the students details using the students id
    @DeleteMapping("/{ID}")
    public ResponseEntity<String>deleteAccountDetailsById(@PathVariable("ID") Long ID){
        accountDetailsService.deleteAccountDetailsById(ID);
        return ResponseEntity.ok("Account details is successfully deleted!!");
    }

    //Searching the account holder details front end
    @GetMapping("/search/{firstName}")
    public ResponseEntity<List<AccountDetails>> searchAccountHolder(@PathVariable("firstName")String firstName){
        return ResponseEntity.ok(accountDetailsService.findByFirstNameContaining(firstName));
    }

}
