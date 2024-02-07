package com.atmbackend.atm_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name="Bank_Statement")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class BankStatement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="statement_ID")
    private Long statementID;
    @Column(name="account_number")
    private Long accountNumber;
    private Double deposit;
    @Column(name="deposit_date")
    private Date depositDate;
    private Double withdraw;
    @Column(name="withdraw_date")
    private Date withdrawDate;
    @Column(name="interest_amount")
    private Double interestAmount;
    @Column(name="total_balance")
    private Double totalBalance;

}
