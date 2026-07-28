import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css'
})
export class ReactiveEnrollment {

  submitted = false;

  enrollmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollmentForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      semester: ['', Validators.required]
    });

  }

  onSubmit() {
    if (this.enrollmentForm.valid) {
      this.submitted = true;
      console.log(this.enrollmentForm.value);
    }
  }

  resetForm() {
    this.enrollmentForm.reset();
    this.submitted = false;
  }
}