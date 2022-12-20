import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class studentDataService {

  constructor() { }
  getEmployeeList(){
    return [
      {name:'nachiket shilwant', course: 'CSE'},
      {name:'pranav', course: 'CSE'},
    ]
  }
}
