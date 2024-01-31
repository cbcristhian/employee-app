import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listEmployee:Employee[]=[
    {
      name: "John Doe",
      phone: 1234567890,
      email: "john.doe@example.com",
      admissionDate: new Date("2020-01-01"),
      civilStatus: "Single",
      sex: "Male",
    },
    {
      name: "Jane Smith",
      phone: 9876543210,
      email: "jane.smith@example.com",
      admissionDate: new Date("2019-05-15"),
      civilStatus: "Married",
      sex: "Female",
    },
    {
      name: "Michael Johnson",
      phone: 5555555555,
      email: "michael.johnson@example.com",
      admissionDate: new Date("2021-11-20"),
      civilStatus: "Divorced",
      sex: "Male",
    },
    {
      name: "Emily Brown",
      phone: 3333333333,
      email: "emily.brown@example.com",
      admissionDate: new Date("2018-08-10"),
      civilStatus: "Single",
      sex: "Female",
    },
    {
      name: "William Lee",
      phone: 6666666666,
      email: "william.lee@example.com",
      admissionDate: new Date("2017-04-25"),
      civilStatus: "Married",
      sex: "Male",
    },
    {
      name: "Sophia Rodriguez",
      phone: 4444444444,
      email: "sophia.rodriguez@example.com",
      admissionDate: new Date("2019-12-15"),
      civilStatus: "Single",
      sex: "Female",
    },
    {
      name: "Ethan Martinez",
      phone: 2222222222,
      email: "ethan.martinez@example.com",
      admissionDate: new Date("2022-02-28"),
      civilStatus: "Married",
      sex: "Male",
    },
    {
      name: "Olivia Taylor",
      phone: 7777777777,
      email: "olivia.taylor@example.com",
      admissionDate: new Date("2020-10-05"),
      civilStatus: "Single",
      sex: "Female",
    },
  ]

  constructor() { }

  getEmployees(){
    return this.listEmployee.slice()
  }

  deleteEmployee(index:number){
    this.listEmployee.splice(index,1)
  }
}
