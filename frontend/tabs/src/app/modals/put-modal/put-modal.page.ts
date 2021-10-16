import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { StudentService } from 'src/app/student.service/student.service';

@Component({
  selector: 'app-put-modal',
  templateUrl: './put-modal.page.html',
  styleUrls: ['./put-modal.page.scss'],
})
export class PutModalPage implements OnInit {

  modalTitle: string;
  modelId: number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private service: StudentService
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal(student) {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
    this.service.editStudent(student);
  }

}