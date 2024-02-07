package com.backendproject.studentdetails.controller;


import com.backendproject.studentdetails.entity.StudentDetails;
import com.backendproject.studentdetails.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("students")
@CrossOrigin("http://localhost:4200/") //Angular connections from java(backend)
public class StudentController {
    @Autowired
    //Service and Repository
    private StudentService studentService;

    //Posting the students information
    @PostMapping
    public String saveStudentDetails(@RequestBody StudentDetails studentDetails){
        studentService.saveStudentDetails(studentDetails);
        return "Student details save successfully!!";
    }

    //Get all the students list information
    @GetMapping
    public ResponseEntity<List<StudentDetails>>getAllStudentDetails(){
        return ResponseEntity.ok(studentService.getAllStudentDetails());
    }

    //Get the students details using the id
    @GetMapping("/{id}")
    public ResponseEntity<StudentDetails> getStudentDetailsById(@PathVariable("id") Long id){
        return ResponseEntity.ok(studentService.getStudentDetailsById(id));
    }

    //Edit and Update the students details
    @PutMapping("/{id}")
    public ResponseEntity<String >updateStudentDetails(@RequestBody StudentDetails studentDetails, @PathVariable("id") Long id){
        return ResponseEntity.ok(studentService.updateStudentDetails(studentDetails, id));
    }

    //Delete the students details using the students id
    @DeleteMapping("/{id}")
    public ResponseEntity<String>deleteStudentDetailsById(@PathVariable("id") Long id){
        studentService.deleteStudentDetailsById(id);
        return ResponseEntity.ok("Student details is successfully deleted!!");
    }

    //Searching the students name in the front end
    //please remove studentRepository and update service
    @GetMapping("/search/{firstName}")
    public ResponseEntity<List<StudentDetails>> searchStudent(@PathVariable("firstName")String firstName){
        return ResponseEntity.ok(studentService.findByFirstNameContaining(firstName));
    }
}
