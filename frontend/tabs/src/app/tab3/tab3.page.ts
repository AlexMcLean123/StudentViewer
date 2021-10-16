import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PutModalPage } from '../modals/put-modal/put-modal.page';
import { StudentService } from '../student.service/student.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  students;
  subscription: Subscription;
  dataReturned: any;


  constructor(private service: StudentService, public modalController: ModalController) {
      this.subscription = this.service.getNotification().subscribe(data => {
        if (data) {
          this.getStudents();
        }
      });
    }
  

  deleteStudent(student) {
      this.service.deleteStudent(student.id).then(
        res => {
          this.students = this.students.filter(item => item.id !== student.id);
        });

    };
    
    getStudents() {
      this.service.getStudents().subscribe(res => {
        this.students = res
        console.log(this.students)
      });
    }


  async openModal(student) {
      const modal = await this.modalController.create({
        component: PutModalPage,
        componentProps: {
          student
        }
      });

      modal.onDidDismiss().then((dataReturned) => {
        if (dataReturned !== null) {
          this.dataReturned = dataReturned.data;
          //alert('Modal Sent Data :'+ dataReturned);
        }
      });

      return await modal.present();
    }


    ngOnInit() {
      this.getStudents();
    }



  }
