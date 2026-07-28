import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  studentName = 'Deepsikha Patra';

  courseName = 'Angular';

  imageUrl =
    'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

  isLoggedIn = true;

  currentDate = new Date();

  fee = 45000;

  courses: string[] = [];

  student = {
    name: '',
    email: ''
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  changeCourse() {
    this.courseName = 'ASP.NET Core';
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      alert('Registration Successful!');
      console.log(this.student);
    }
  }
}