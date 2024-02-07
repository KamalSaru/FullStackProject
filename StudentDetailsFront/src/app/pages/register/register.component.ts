import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    }

    ngOnInit(): void {
        this.registerForm=this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password:['', Validators.required]
        })
    }

    register(): void{
      const user=this.registerForm.value;
      this.userService.register(user).subscribe((result: string) =>{
        if(result === 'User register successfully!!!'){
          //result message should be same in the backend program.
          this.router.navigate([''])
        }else{
          alert('User registration failed!!');
        }
      })
    }
}
