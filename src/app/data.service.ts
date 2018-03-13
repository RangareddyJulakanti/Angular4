import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from './customer';
import { Student } from './student';

@Injectable()
export class DataService {
  private customersUrl = 'api/customer';  // URL to web API
  private studentsUrl = 'api/student';   // URL to web API

  constructor(private http: Http) { }
  // Get all customers
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.customersUrl)
               .toPromise()
               .then(response => response.json() as Customer[])
               .catch(this.handleError);
  }
// Get all students
getStudents(): Promise<Student[]> {
  return this.http.get(this.studentsUrl)
             .toPromise()
             .then(response => response.json() as Student[])
             .catch(this.handleError1);
}
  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private handleError1(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  


}
