import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Student } from '../model/student';
import { tap, delay, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private student: Student = {
    name: "Alex",
    dob: "2008-01-01",
    email: "TESTER@g,al.com"
  }

  private url = "http://localhost:8080/api/v1/student";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  private subject = new Subject<any>();



  constructor(private httpClient: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    console.log("service")
    return this.httpClient.get<Student[]>(this.url).pipe(
      tap(res => console.log('All: ' + JSON.stringify(res))));
  }

  //Value is any string message or boolean value
  //this will notify that you have added or deleted the data successfully and you //want other component to listen that

  sendNotification(value: any) {
    this.subject.next({ text: value });
  }


  getNotification() {
    return this.subject.asObservable();
  }

   addStudent() {
    const headers = { 'content-type': 'application/json'}  
    const item = JSON.stringify(this.student);
    this.httpClient.post(this.url, item,{'headers':headers}).subscribe(data => {
      console.log(data);
      this.sendNotification(true)

    });

  }

}