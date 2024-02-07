import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  //Database connections
  url: string ='http://localhost:8080/students'
  studentForm: any;
  studentService: any;
  constructor(private http : HttpClient){ }

  getAllStudents():Observable<Student[]>{ 
    return this.http.get<Student[]>(this.url)
  }
 
  deleteStudent(id : number): Observable<string>{
    //@ts-ignore //ignore suppression
    //http://localhost:8080/students/id
    return this.http.delete<string>(this.url.concat('/').concat(String(id)), {responseType:"text"});
  }

  saveStudent(student: Student): Observable<any>{
    //@ts-ignore
    return this.http.post<any>(this.url, student, {responseType:'text'})
  }

  addStudent(student: Student): Observable<string>{
    //@ts-ignore
    return this.http.post<string>(this.url, student, {responseType:'text'});
  }


  getStudentById(id:string): Observable<Student>{
    //@ts-ignore
    return this.http.get<Student>(this.url.concat('/').concat(id));
  }

  updateStudent(id: number, student: Student): Observable<any>{
    //@ts-ignore
    return this.http.put<any>(this.url.concat('/').concat((id)), student, {responseType:'text'});
  }

  searchStudent(firstName: string) :Observable<Student[]> {
    return this.http.get<Student[]>(this.url.concat('/search/').concat(firstName));
  }
}
