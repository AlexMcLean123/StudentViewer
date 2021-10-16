import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/student.service/student.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {

  constructor(private service: StudentService) { }


  student = new Student();

  postForm() {
    this.service.addStudent(this.student);
    this.student.dob ='';
    this.student.email ='';
    this.student.name ='';
  }

  ngOnInit() {

  }

}