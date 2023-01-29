import { ConsoleLogger } from '@angular/compiler-cli';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 addEmployeeRequest: Employee = {
  id:'',
  name: '',
  email: '',
  phone:0,
  salary: 0,
  department:''
 };
 
 constructor(private employeeservice: EmployeesService, private router: Router) {
 }
  ngOnInit(): void {

  }

  addEmployee() {
    this.employeeservice.addEmployee(this.addEmployeeRequest).
    subscribe({
       next: (employee) => {
          this.router.navigate(['employees'])
       },
       error: (employee) => {
        console.log(employee)
     }
    }
    );
  }

}
