import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit, OnDestroy{
  studentList: Student[]=[];
  searchValue: string = '';
  // searchValue: string;
  constructor(private studentService: StudentService){
    console.log('Inside constructor')
  }

  ngOnInit(): void{
    console.log('component initialized');
    this.getAllStudents(); //refress after delete or reuse
  }

  ngOnDestroy(): void{
  }

  getAllStudents(): void{
    this.studentService.getAllStudents().subscribe((students: Student[])=>{
      this.studentList=students;
      console.log(this.studentList);
  })
  }

  deleteStudent(id : number): void{
    this.studentService.deleteStudent(id).subscribe((result: string)=>{
      // console.log(result);
      alert(result);//pup up alert
      this.getAllStudents()   //refress after delete
    })
  }

  saveStudent(student: Student): any{
    //@ts-ignore
    this.studentService.saveStudent(student).subscribe((result: string) =>{
      alert(result);
      this.getAllStudents()
    })
  } 

  searchByFirstName(): void{
    //@ts-ignore
    this.studentService.searchStudent(this.searchValue).subscribe((students =>{
      this.studentList = students;
    }))
  }
}

