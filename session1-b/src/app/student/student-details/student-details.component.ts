import { Component, OnInit } from '@angular/core';
import { studentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class studentDetailsComponent implements OnInit {
 studentDetails = [];
  constructor(
    private studentData: studentDataService
  ) { }

  ngOnInit(): void {
    this.studentDetails = this.studentData.getEmployeeList();
    console.log("this.studentDetails",this.studentDetails);
  }

}