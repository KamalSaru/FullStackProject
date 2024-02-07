import {Component, numberAttribute, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminloginService} from "../service/admin-login.service";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})

export class AdminRegisterComponent implements OnInit{
  adminRegisterForm!: FormGroup;

  constructor(private adminFormBuilder: FormBuilder,
     private adminLoginService: AdminloginService,
     private router: Router){
  }

  //Admin register entity---------------------------------------------
  ngOnInit(): void {
    this.adminRegisterForm=this.adminFormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department:['',Validators.required],
      position:['',Validators.required],
      email: ['',Validators.required],
      password:['', Validators.required],
      pinCode:['', Validators.required]
    })
  }

  //Admin register data--------------------------------------------
  adminRegister(): void{
    const adminLogin=this.adminRegisterForm.value;
    this.adminLoginService.adminRegister(adminLogin).subscribe((result: string) =>{
      if(result ==="Admin login registered successfully!!"){
        alert('Admin login registered successfully.')
        this.router.navigate([''])
      }else {
        alert('Admin login register failed.')
        this.router.navigate(['adminRegister'])
      }
    })
  }
}
