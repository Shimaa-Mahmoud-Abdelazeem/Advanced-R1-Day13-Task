
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  //for data fromurl
  route: ActivatedRoute = inject(ActivatedRoute);
    // for getting datat from servcie
  Employeeservice = inject(EmployeeserviceService )

  employee :Employee |undefined;

  constructor() {
    const employeeid = Number(this.route.snapshot.params['id']);
    this.employee = this.Employeeservice.getemployeebyid(employeeid);
  }
}
