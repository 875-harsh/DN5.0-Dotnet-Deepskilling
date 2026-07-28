import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '../../services/api';

@Component({
  selector: 'app-student-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-api.html',
  styleUrl: './student-api.css'
})
export class StudentApi implements OnInit {

  students: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getStudents().subscribe(data => {
      this.students = data;
    });
  }

}