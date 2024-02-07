import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  //@ts-ignore
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router){
  }

  ngOnInit(): void {
      this.loginForm=this.formBuilder.group( {
        email:['', [Validators.required, Validators.email]],
        password:['', [Validators.required, Validators.minLength(6)]]
      })
  }

  login(): void{
    const user=this.loginForm.value;
    this.userService.login(user).subscribe((message:string) =>{
      if(message === 'Login success!!!'){
        //message should be same in the backend program. 
        //go to homepage
        this.router.navigate(['home']);
    }else{
      alert(message);
      }
    })
  }
}
