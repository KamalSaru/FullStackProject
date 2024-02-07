package com.backendproject.studentdetails.controller;


import com.backendproject.studentdetails.entity.User;
import com.backendproject.studentdetails.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@CrossOrigin("http://localhost:4200/")
@RequestMapping("/user")

public class UserController {

  @Autowired
  //try to make method userService
  private UserRepository userRepository;

  //Register the users username and password
  @PostMapping("/register")
  public ResponseEntity<String>registerUser(@RequestBody User user){
    this.userRepository.save(user);
    return ResponseEntity.ok("User register successfully!!!");
  }

  //login verify
  @PostMapping("/login")
  public ResponseEntity<String>validateUser(@RequestBody User user){
    Optional<User> userFromDB =this.userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());
    if(userFromDB.isPresent()){
      return ResponseEntity.ok("Login success!!!");
      //This message should same in the frontend app.
    }else {
      return ResponseEntity.ok("Invalid email or password!!!");
    }
  }
}
