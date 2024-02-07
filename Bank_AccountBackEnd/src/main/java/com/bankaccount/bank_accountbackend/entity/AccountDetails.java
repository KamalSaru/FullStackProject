package com.bankaccount.bank_accountbackend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Formula;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.util.Date;

@Table(name="Bank_Account")
@Data
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class AccountDetails {
    @Id
    //choose generation type auto or sequence
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "ID_generator")
    @SequenceGenerator(name="ID_generator",sequenceName = "studentDetails_sequence")

    private Long ID;
    private Long accountNumber;
    private String firstName;
    private String lastName;

    @Column(name="phone_number")
    private Long phone;
    //@NotBlank(message="Please provide valid email address!!")
    private String address;
    private String gender;

    @Column(name="Date_Of_Birth")
    private String dob;

    @Column(name="email_address")
    private String email;

    @Column(name="beginning_balance")
    private Double beginningBalance;

    @Column(name="deposit_amount")
    private Double depositAmount;

    //trying to put auto current date
    //@Temporal(TemporalType.DATE)
    @UpdateTimestamp
    private LocalDate depositDate;

    @Column(name="withdraw_amount")
    private Double withdrawAmount;

    //trying to put auto current date
    //@Temporal(TemporalType.DATE)
    @UpdateTimestamp
    private LocalDate withdrawDate;

    //Create formula, column automatic create----
    //@Column(name="total_balance")
    //@Transient(formula------------)
    //@Formula(value = "beginningBalance+depositAmount-withdrawAmount")
    private Double totalBalance;

    //Create formula
    @Column(name="interest_amount")
    //interest rate 7%
    //@Formula(value="totalBalance*0.07")
    private Double interestAmount;
    private Double serviceFee;

    //Create formula
    @Column(name="closing_balance")
    //@Formula(value = "totalBalance+interestAmount-serviceFee")
    private Double closingBalance;
    private String active;
    //Inside action deposit, withdraw and transaction view bottom
    private String action;

    }