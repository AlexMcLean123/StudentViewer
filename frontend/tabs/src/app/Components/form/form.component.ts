import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor(private service: StudentService, private fb: FormBuilder) { }


  student = new Student();
  form: FormGroup;

  postForm() {
    this.service.addStudent(this.student)
    this.student.dob ='';
    this.student.email ='';
    this.student.name ='';
  }

  ngOnInit() {

  }
