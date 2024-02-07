package com.atmbackend.atm_backend.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="Customer_Address")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CustomerAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name="address_ID")
    private Long addressID;
    private String city;
    private String county;
    private String state;
    @Column(name="zip_code")
    private Integer zipcode;
    private String country;
}
