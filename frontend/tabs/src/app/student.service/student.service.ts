import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Student } from '../model/student';
import { tap, delay, map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "http://localhost:8080/api/v1/student";

  private subject = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
  }



  getStudents(): Observable<Student[]> {
    console.log("service")
    return this.httpClient.get<Student[]>(this.url).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  //Value is any string message or boolean value
  //this will notify that you have added or deleted the data successfully and you //want other component to listen that


  async addStudent(myStudent: Student) {
    const headers = { 'content-type': 'application/json' }
    const item = JSON.stringify(myStudent);
    return await this.httpClient.post(this.url, item, { 'headers': headers }).subscribe(
      data => {
        this.showSuccess();
        console.log(data);
        this.sendNotification(true)
      },
      err => {
        if (err.status == 500) {
          console.log("Email error")
          this.showEmailError();
        }
        if (err.status == 400) {
          console.log("Parse Error")
          this.showParseError();
        }
      });
  };

  deleteStudent(id) {
    return this.httpClient.delete(this.url + '/' + id).forEach(
      data => {
        console.log(data);
        this.showDelete();
        this.sendNotification(true);
      })
  }

  editStudent(student) {
    return this.httpClient.put(this.url + '/' + student.id, student, this.httpOptions).subscribe(
      data => {
        console.log(data)
        this.showEditSuccess();
      })
  }

  showSuccess() {
    this.toastr.success('Student Added', 'Success');
  }
  showDelete() {
    this.toastr.success("Student Deleted")
  }
  showEditSuccess() {
    this.toastr.success("Student updated")
  }
  showEmailError() {
    this.toastr.error('Email Address already taken', 'Error');
  }
  showParseError() {
    this.toastr.error('Invalid Date Entered', 'Bad Request');
  }


  sendNotification(value: any) {
    this.subject.next({ text: value });
  }


  getNotification() {
    return this.subject.asObservable();
  }






}