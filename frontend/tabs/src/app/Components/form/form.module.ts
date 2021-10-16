import { NgModule } from "@angular/core";
import { FormComponent } from "./form.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
    exports: [FormComponent],
    declarations: [FormComponent],
    providers: [],
 })
 
 export class FormModule {
 }
 