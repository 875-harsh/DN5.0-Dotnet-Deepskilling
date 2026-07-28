import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  student = {
    studentName: '',
    studentEmail: '',
    courseId: '',
    preferredSemester: '',
    agreeToTerms: false
  };

  submitted = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.student);
      this.submitted = true;
    }
  }

  resetForm(form: NgForm) {
    form.resetForm();

    this.student = {
      studentName: '',
      studentEmail: '',
      courseId: '',
      preferredSemester: '',
      agreeToTerms: false
    };

    this.submitted = false;
  }
}