import { Component, OnInit } from '@angular/core';
import { studentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class studentListComponent implements OnInit {
 studentList = [];
  constructor(
    private studentData: studentDataService
  ) { }

  ngOnInit(): void {
    this.studentList = this.studentData.getstudentList();
    console.log("this.studentList",this.studentList);
  }

}