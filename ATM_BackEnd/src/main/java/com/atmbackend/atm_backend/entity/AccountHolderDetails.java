package com.atmbackend.atm_backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.aspectj.lang.annotation.RequiredTypes;
import org.springframework.web.bind.annotation.RequestParam;

import java.text.NumberFormat;
import java.util.Date;
import java.util.List;

@Table(name="Account_Holder_Details")
@Data
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class AccountHolderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "Id_generator")
    @SequenceGenerator(name = "ID_generator", sequenceName = "AccountHolderDetails_Sequence")

    @Column(name="AC_Holder_ID")
    private Long ACHolderID;
    private String firstName;
    private String lastName;
    @Column(name="Date_Of_Birth")
    private Date DOB;
    private String gender;
    @Column(name="phone_number") //change column name
    private  Long phone;
    
    @OneToMany(cascade =CascadeType.ALL)
    @JoinColumn(name="address_fk_ID", referencedColumnName = "AC_Holder_ID")
    private List<CustomerAddress> customerAddressList;

    //joining table bank statement
    //referencedColumnName = "AC_Holder_ID"
    //Foreign Key=fk,create different fk name according to the table
    @OneToMany(cascade =CascadeType.ALL)
    @JoinColumn(name="customer_fk_ID",referencedColumnName = "AC_Holder_ID")
    private List<BankStatement> bankStatementList;

    @Column(name="email_Address")
    private String email;
    private String status;
    private String active;
    //action button for deposit, withdraw and transaction view
    private String action;
}
