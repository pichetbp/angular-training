import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Registration } from '../../models/registration';
@Component({
  selector: 'app-register-grid-view',
  imports: [CommonModule],
  templateUrl: './register-grid-view.component.html',
  styleUrl: './register-grid-view.component.css',
})
export class RegisterGridViewComponent {
  courses: Registration[] = [];
  constructor(private courseService: CourseService, private router: Router) {
    this.courseService.getCourses().subscribe({
      next: (response) => {
        this.courses = response;
      },
      error: (error) => {
        this.courses = [];
      },
    });
  }
  editCourse(index: number) {
    const formData = { index: index };
    this.router.navigate(['/registers'], { queryParams: formData });
  }
  deleteCourse(index: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourses(index).subscribe({
        next: (response) => {
          this.courseService.getCourses().subscribe({
            next: (response) => {
              this.courses = response;
            },
            error: (error) => {
              this.courses = [];
            },
          });
        },
      });
    }
  }
}
