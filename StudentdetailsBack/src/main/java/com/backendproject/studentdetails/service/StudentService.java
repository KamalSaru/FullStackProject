package com.backendproject.studentdetails.service;


import com.backendproject.studentdetails.entity.StudentDetails;
import com.backendproject.studentdetails.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    //save all the students PostMapping
    public void saveStudentDetails(StudentDetails studentDetails){
        studentRepository.save(studentDetails);
    }

    //Get all students information
    public List<StudentDetails>getAllStudentDetails() {
        return studentRepository.findAll();
    }

    //update/patch method student details
    public String updateStudentDetails(StudentDetails std, Long id){
        Optional<StudentDetails> students=studentRepository.findById(id);
        if (students.isPresent()){
            StudentDetails studentDetails=students.get();
            studentDetails.setFirstName(std.getFirstName());
            studentDetails.setLastName(std.getLastName());
            studentDetails.setAddress(std.getAddress());
            studentDetails.setGender(std.getGender());
            studentDetails.setDob(std.getDob());
            studentDetails.setEmail(std.getEmail());
            studentDetails.setPhone(std.getPhone());
            studentDetails.setStatus(std.getStatus());
            studentDetails.setActive(std.getActive());
            studentRepository.save(studentDetails);
            return "Student update successfully!!";
        } else {
            return "Student id "+ id + " doesn't exit!!";
        }
    }

    //Get method to students details using id
    public StudentDetails getStudentDetailsById(Long id){
        Optional<StudentDetails> studentDetails=studentRepository.findById(id);
        if(studentDetails.isPresent()){
            return studentDetails.get();
        }else {
            return null;
        }
    }

    //put method to update students details using id
    public String updateStudent(StudentDetails studentDetails, Long id){
        Optional<StudentDetails>student =this.studentRepository.findById(id);
        if(student.isPresent()){
            studentDetails.setId(student.get().getId());
            this.studentRepository.save(studentDetails);
            return "Student updated successfully!!!";
        } else {
            return "Student not found!!";
        }
    }

    //Deleting method for id
    public void deleteStudentDetailsById(Long id){
        studentRepository.deleteById(id);
    }

    //searching the student using the first name
    public List<StudentDetails> findByFirstNameContaining(String firstName) {
      studentRepository.findByFirstNameContaining(firstName);
      return studentRepository.findByFirstNameContaining(firstName);
  }
}
