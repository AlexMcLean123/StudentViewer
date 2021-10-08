import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/student.service/student.service';

@Component({
  selector: 'app-studen-table',
  templateUrl: './studen-table.component.html',
  styleUrls: ['./studen-table.component.scss'],
})
export class StudenTableComponent implements OnInit {


  students: Student[] = [];
  constructor(private service: StudentService) {}



  getStudents(){
    this.service.getStudents().subscribe(res => {
      this.students = res
      console.log(this.students)
    })
  }
  ngOnInit(){
  this.getStudents();
  }


}
