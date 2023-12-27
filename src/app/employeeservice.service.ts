import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() {

  }
// get all employees
  getallemployees():Employee[]{

    return this.employees;
  }


// get specific by id employees
getemployeebyid(id:number):Employee |undefined{

    return this.employees.find( employee => employee.id === id );
}

// delete employees
deleteemployee(id:number){

 const index = this.employees.findIndex((employee => employee.id === id));
 this.employees.splice(index,1);

}
// count employees
employeecount():number{

  return this.employees.length;
}

 nextid = 4;

 // add employees
 createemployee(employee :Employee){
  employee.id = this.nextid++;
  this.employees.push(employee);
}

// edit employees
updateemployee(employeeid:number , updatedemployee: Employee ){

  const index  =  this.employees.findIndex(  employee => employee.id === employeeid);

  this.employees[index] = {...updatedemployee , id : employeeid   }


}
 //  employees data
  private employees :Employee[]= [

    {
        id:1,
        firstName:"Shimaa",
        lastName:"Mahmoud",
        email:"shimaa@gmail.com",
        address:"minia",
        phone:123456258,
    },
    {
      id:2,
      firstName:"Mahmoud",
      lastName:"Abd Elazeem",
      email:"mahmoud@gmail.com",
      address:"Cairo",
      phone:123456444,
  },
  {
    id:3,
    firstName:"Abd Elazeem",
    lastName:"Mohamed",
    email:"abdelazeem@gmail.com",
    address:"Alex",
    phone:112345632,
},
  ]
}
