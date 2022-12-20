import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentListComponent } from './student-list/student-list.component';
import { studentDetailsComponent } from './student-details/student-details.component';
import { studentDataService } from './student-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    studentDataService
  ]
})
export class studentModule { }