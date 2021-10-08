import { Component } from '@angular/core';
import { StudentService } from '../student.service/student.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private service: StudentService) {}


  click(){
    this.service.addStudent();
  }

  ngOnInit(){
    console.log("hello from init");
    this.click();
  }

}
