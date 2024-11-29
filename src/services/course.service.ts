import { Injectable } from '@angular/core';
import { RegisterApiService } from './register-api.service';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private registerService: RegisterApiService) {}

  getCourses(): Observable<Registration[]> {
    return this.registerService.getRegistrations();
  }

  getCourse(index: number): Observable<Registration> {
    return this.registerService.getRegistration(index);
  }

  addCourses(newCourse: Registration) {
    return this.registerService.addRegistration(newCourse);
  }
  updateCourse(updateCourse: Registration) {
    return this.registerService.updateRegistration(updateCourse);
  }
  deleteCourses(index: number) {
    return this.registerService.deleteRegistration(index);
  }
}
