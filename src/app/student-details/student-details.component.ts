
import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../student';
import { DataService } from '../data.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'student-detail',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers: [DataService]
})
export class StudentDetailsComponent {

  @Input() student: Student;
}