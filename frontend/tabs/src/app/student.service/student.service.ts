import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  _id: number;
  name: string;
  dob: string;
  email: string;

  url = "http://localhost:8080/api/v1/student";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { 
  }

    getStudents(): Observable<Student[]>{
      console.log("service")
      return this.httpClient.get<Student[]>(this.url).pipe(
        tap(res => console.log('All: ' + JSON.stringify(res))));
    }

    getAll(): Observable<any> {
      console.log("getall")
      return this.httpClient.get<Student[]>("http://localhost:8080/api/v1/student");
    }

  }

