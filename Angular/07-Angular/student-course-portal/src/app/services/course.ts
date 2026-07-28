import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() {}

  getCourses(): string[] {
    return [
      'Angular',
      'React',
      'ASP.NET Core',
      'Python',
      'Java',
      'Machine Learning',
      'Cyber Security'
    ];
  }
}