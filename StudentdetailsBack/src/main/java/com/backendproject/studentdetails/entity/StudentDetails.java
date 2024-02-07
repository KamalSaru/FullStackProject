package com.backendproject.studentdetails.entity;

import jakarta.persistence.*;
import lombok.*;

@Table(name="Student_Records")
@Data
@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class StudentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "ID_generator")
    @SequenceGenerator(name="ID_generator",sequenceName = "studentDetails_sequence")
    private Long id;
    //@NotBlank(message="Please provide first name!!")
    private String firstName;
    private String lastName;
    private String address;
    //@NotBlank(message="Please provide gender!!")
    private String gender;
    private String dob;
    //@NotBlank(message="Please provide valid email address!!")
    @Column(name="email_address")
    private String email;
    @Column(name="phone_number")
    private Long phone;
    private String status;
    private String active;
}

