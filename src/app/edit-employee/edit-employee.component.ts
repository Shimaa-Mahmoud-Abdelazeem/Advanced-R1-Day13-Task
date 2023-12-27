import { Employee } from './../employee';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  updateemployeeform! : FormGroup;
  employeeid!:number;


constructor( private formbuilder:FormBuilder ,private employeeservice :EmployeeserviceService ,private route:ActivatedRoute ){

  this.updateemployeeform =  this.formbuilder.group({
    firstName:[''],
      lastName :[''],
      email:[''],
      address:[''],
      phone:[''],

  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.employeeid = +params['id'];
    this.loadEmployeeDetails();
  });
}

loadEmployeeDetails() {
  const employe = this.employeeservice.getemployeebyid(this.employeeid);

  if (employe) {
    this.updateemployeeform.patchValue(employe);
  } else {
    // Redirect to the product list if the product is not found

  }
}

updateEmployee() {
  if (this.updateemployeeform.valid) {
    const updatedemployee: Employee = {
      id: this.employeeid,
      ...this.updateemployeeform.value
    };

    this.employeeservice.updateemployee(this.employeeid, updatedemployee);

  }
}


}
