
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from './../employee';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Employees: Employee[] = [];

  employeeservice :EmployeeserviceService = inject(EmployeeserviceService);
  constructor() {

    this.Employees  = this.employeeservice.getallemployees();

      }

      deleteremployee(id:number){
    this.employeeservice.deleteemployee(id);

      }

}
