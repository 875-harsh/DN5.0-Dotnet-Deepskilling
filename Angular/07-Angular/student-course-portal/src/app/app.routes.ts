import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { CourseList } from './components/course-list/course-list';
import { StudentProfile } from './components/student-profile/student-profile';
import { EnrollmentForm } from './components/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './components/reactive-enrollment/reactive-enrollment';
import { StudentApi } from './components/student-api/student-api';
import { PipesDemo } from './components/pipes-demo/pipes-demo';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'courses',
    component: CourseList
  },
  {
    path: 'profile',
    component: StudentProfile
  },
  {
    path: 'enroll',
    component: EnrollmentForm
  },
  {
  path: 'reactive-enroll',
  component: ReactiveEnrollment
},
{
  path: 'api',
  component: StudentApi
},
{
  path: 'pipes',
  component: PipesDemo
}
];