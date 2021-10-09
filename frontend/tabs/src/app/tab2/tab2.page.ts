import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Student } from '../model/student';
import { StudentService } from '../student.service/student.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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

}
