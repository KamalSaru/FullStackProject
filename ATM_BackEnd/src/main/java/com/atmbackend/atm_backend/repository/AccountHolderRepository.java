package com.atmbackend.atm_backend.repository;

import com.atmbackend.atm_backend.entity.AccountHolderDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountHolderRepository extends JpaRepository<AccountHolderDetails, Long> {
}
