import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CommonModule,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = ['Angular','ReactJS','Vue']
  constructor(){}
}
