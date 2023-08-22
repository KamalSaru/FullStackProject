package com.atmbackend.atm_backend.repository;

import com.atmbackend.atm_backend.entity.BankStatement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BankStatementRepository extends JpaRepository<BankStatement, Long> {
}
