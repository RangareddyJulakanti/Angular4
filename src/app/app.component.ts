import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { Student } from './student';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
  customers: Customer[];
  students:Student[];
  selectedCustomer: Customer;
  selectedStudent:Student;

  constructor(private dataService: DataService) {}

  getCustomers() {
     return this.dataService.getCustomers().then(customers => this.customers = customers);
  }
  getStudents() {
    return this.dataService.getStudents().then(students => this.students = students);
 }
  ngOnInit(): void {
     this.getCustomers();
     this.getStudents();
  }

  onSelect(cust: Customer): void {
  this.selectedCustomer = cust;
  }
  onSelect1(stud: Student): void {
    this.selectedStudent = stud;
  }
}
