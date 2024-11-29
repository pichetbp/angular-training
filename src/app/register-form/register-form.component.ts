import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Registration } from '../../models/registration';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  formControl: Registration = { id: -1, name: '', email: '', course: '' };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['index'] === undefined) {
        // do insert
        console.log('Inserting');
        this.formControl.course = params['course'];
      } else {
        // do update
        console.log('Updating', params['index']);
        this.formControl.id = params['index'];
        this.courseService.getCourse(params['index']).subscribe((res) => {
          this.formControl = res;
        });
      }
    });
  }

  onSubmit() {
    const formData = {
      name: this.formControl.name,
      email: this.formControl.email,
      course: this.formControl.course,
      index: this.formControl.id,
      status: this.formControl.id == -1 ? 'new' : 'update',
    };
    this.router.navigate(['/confirm'], { queryParams: formData });
  }
}
