package com.backendproject.studentdetails.repository;


import com.backendproject.studentdetails.entity.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<StudentDetails, Long> {
    //searching the student using the first name
    public List<StudentDetails> findByFirstNameContaining(String firstName);
}


