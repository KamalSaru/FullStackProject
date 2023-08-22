package com.atmbackend.atm_backend.repository;

import com.atmbackend.atm_backend.entity.CustomerAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerAddressRepository extends JpaRepository<CustomerAddress, Long> {
}
