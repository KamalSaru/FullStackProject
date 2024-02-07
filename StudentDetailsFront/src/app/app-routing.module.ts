import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentsComponent } from "./pages/new-students/new-students.component";
import { StudentListComponent } from "./pages/student-list/student-list.component";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [

  //this component for open pages---------------------------------------------------------------------
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:StudentListComponent},
  {path: 'new', component:NewStudentsComponent},
  {path: 'update/:id', component:NewStudentsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
