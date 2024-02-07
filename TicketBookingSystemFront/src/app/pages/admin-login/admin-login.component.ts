import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/pages/service/admin-login.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})


export class AdminLoginComponent implements OnInit {
  //@ts-ignore
  adminLoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private adminLoginService: AdminloginService,
    private router: Router){
    }

  //admin login field-------------------------------------------
  ngOnInit(): void {
    this.adminLoginForm=this.formBuilder.group({
      email:['', Validators.required],  //Validators.email
      password:['', Validators.required], //Validators.minLength(6)
      pinCode:['',Validators.required],  //Validators.minLength(6)
    })
  }

  //admin login data------------------------------------------------------------
  adminLogin(): void{
    const adminLogin=this.adminLoginForm.value;
    this.adminLoginService.adminLogin(adminLogin).subscribe((message:string) =>{
      if(message === 'Admin login successfully.'){
        alert('Admin login successfully.')
        //message should be same in the backend program.
        //go to homepage
        this.router.navigate(['homepage']);
      }else{
        alert(message);
      }
    })
  }
}
