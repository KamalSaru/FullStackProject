package com.bankaccount.bank_accountbackend.repository;

import com.bankaccount.bank_accountbackend.entity.AccountDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface AccountDetailsRepository extends JpaRepository<AccountDetails, Long> {
  //searching detail using first name
  public List<AccountDetails> findByFirstNameContaining(String firstName);
  }
