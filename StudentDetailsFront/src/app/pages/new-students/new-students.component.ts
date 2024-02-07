import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.scss']
})


export class NewStudentsComponent implements OnInit{
  //Dependency Injection
  //FormGroup is collecting of form control
  studentForm!: FormGroup;
  studentData: any;
  id? : string ; //for global this id

  constructor(private formBuilder: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute){ //Dependency Injection
  }

  ngOnInit(): void {
    this.studentForm=this.formBuilder.group({
      // We can put default value if we need...........................
      firstName :[''],
      lastName: [''],
      address: [''],
      gender : [''],
      dob : [''],
      email: [''],
      phone: [''],
      status: [''],
      active: ['']
    });

  //@ts-ignore
  this.id=this.route.snapshot.paramMap.get('id');
  //console.log(id);
  if(this.id !==null){  //if id is not null than use
  //update operation
  //@ts-ignore
  this.studentService.getStudentById(this.id).subscribe((studentData: Student) =>{
       this.studentForm.patchValue(studentData);
     });
    }
  }

  saveStudent(): any{
    console.log(this.studentForm.value);
    this.studentData=this.studentForm.value;
    this.studentData.active=this.studentData.active ? 'Yes':'No';
    if(this.id ==null){
      //saving new student
      //@ts-ignore
    this.studentService.saveStudent(this.studentData).subscribe((message:string) =>{
      console.log(message);
      //alert(message)
      //after add new student stay on homepage
      this.router.navigate(['home']);
    });
  }else{
    //Updating existing student
    //@ts-ignore
    this.studentService.updateStudent(Number(this.id), this.studentData).subscribe((message: any) =>{
      alert(message);
      this.router.navigate(['']);
    })
   }
  }
}
