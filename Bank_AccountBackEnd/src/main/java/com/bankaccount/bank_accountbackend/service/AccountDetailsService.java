package com.bankaccount.bank_accountbackend.service;

import com.bankaccount.bank_accountbackend.entity.AccountDetails;
import com.bankaccount.bank_accountbackend.repository.AccountDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import static com.bankaccount.bank_accountbackend.entity.AccountDetails.*;


@Service
public class AccountDetailsService {
    @Autowired
    private static AccountDetailsRepository accountDetailsRepository;

    //save all the details of account holder from postMapping
    public void saveAccountDetails(AccountDetails accountDetails){
        accountDetailsRepository.save(accountDetails);
    }

    //Get all students list information
    public List<AccountDetails>getAllAccountDetails() {
        return accountDetailsRepository.findAll();
    }

    //Find accountDetails using ID
    public static AccountDetails getAccountDetailsById(Long ID){
        Optional<AccountDetails> accountDetails=accountDetailsRepository.findById(ID);
        if(accountDetails.isPresent()){
            return accountDetails.get();
        }else {
            return null;
        }
    }

    //update: Put method account details
    public String updateAccountDetails(AccountDetails customers, Long ID){
        Optional<AccountDetails> accountHolder=accountDetailsRepository.findById(ID);
        if (accountHolder.isPresent()){
            AccountDetails accountDetails=accountHolder.get();
            accountDetails.setAccountNumber(customers.getAccountNumber());
            accountDetails.setFirstName(customers.getFirstName());
            accountDetails.setLastName(customers.getLastName());
            accountDetails.setPhone(customers.getPhone());
            accountDetails.setAddress(customers.getAddress());
            accountDetails.setGender(customers.getGender());
            accountDetails.setDob(customers.getDob());
            accountDetails.setEmail(customers.getEmail());
            accountDetails.setBeginningBalance(customers.getBeginningBalance());
            accountDetails.setDepositAmount(customers.getDepositAmount());
            accountDetails.setDepositDate(customers.getDepositDate());
            accountDetails.setWithdrawAmount(customers.getWithdrawAmount());
            accountDetails.setWithdrawDate(customers.getWithdrawDate());
            accountDetails.setTotalBalance(customers.getTotalBalance());
            accountDetails.setInterestAmount(customers.getInterestAmount());
            accountDetails.setServiceFee(customers.getServiceFee());
            accountDetails.setActive(customers.getActive());
            accountDetails.setAction(customers.getAction());
            accountDetailsRepository.save(accountDetails);
            return "Account details update successfully!!";
        } else {
            return "Account details ID "+ ID + " doesn't exit!!";
        }
    }

    //Deleting method for ID
    public void deleteAccountDetailsById(Long ID){
        accountDetailsRepository.deleteById(ID);
    }

    //searching the student using the first name
    public List<AccountDetails> findByFirstNameContaining(String firstName) {
        accountDetailsRepository.findByFirstNameContaining(firstName);
        return accountDetailsRepository.findByFirstNameContaining(firstName);
    }
}
