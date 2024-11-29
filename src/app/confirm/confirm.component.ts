import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Registration } from '../../models/registration';

@Component({
  selector: 'app-confirm',
  imports: [],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css',
})
export class ConfirmComponent {
  registration: Registration = { id: -1, name: '', email: '', course: '' };
  status: string = 'new';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.registration.course = params['course'];
      this.registration.email = params['email'];
      this.registration.name = params['name'];
      this.status = params['status'];
      if (this.status != 'new') {
        this.registration.id = +params['index'];
      }
    });
  }
  onSubmit() {
    const handleNext = {
      next: (res: any) => {
        console.log(res);
        this.router.navigate(['/allregistered']);
      },
      error: (err: any) => {
        console.log(err);
      },
    };

    if (this.status === 'new') {
      this.courseService.addCourses(this.registration).subscribe(handleNext);
    } else {
      this.courseService.updateCourse(this.registration).subscribe(handleNext);
    }
  }
  goBack() {
    this.router.navigate(['/courses']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
