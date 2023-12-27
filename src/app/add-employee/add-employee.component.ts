
import { Component, inject } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee! : Employee[];


  employeeservice :EmployeeserviceService = inject(EmployeeserviceService);


  employeeform! : FormGroup;



  constructor(private formbuilder: FormBuilder) {

    this.employeeform =  this.formbuilder.group({
      firstName:['' ],
      lastName :[''],
      email:[''],
      address:[''],
      phone:[''],

    })

    this.employee =  this.employeeservice.getallemployees();

  }

  addemployee(){

  const employee :Employee = this.employeeform.value;
  this.employeeservice.createemployee(employee);
  console.log(employee);

  }

submit(){

  }
}

