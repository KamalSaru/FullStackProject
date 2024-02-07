package com.backendproject.studentdetails.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator="user_id_generator")
  @SequenceGenerator(name="user_id_generator", sequenceName = "user_id_sequence")
  private Long id;
  private String firstName;
  private String lastName;
  private String email;
  private String password;
}
