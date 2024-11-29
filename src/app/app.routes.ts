import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { RegisterGridViewComponent } from './register-grid-view/register-grid-view.component';
import { LoginComponent } from './login/login.component';
import { guardGuard } from '../guard/guard.guard';

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent, canActivate: [guardGuard] },
  {
    path: 'registers',
    component: RegisterFormComponent,
    canActivate: [guardGuard],
  },
  { path: 'confirm', component: ConfirmComponent, canActivate: [guardGuard] },
  {
    path: 'allregistered',
    component: RegisterGridViewComponent,
    canActivate: [guardGuard],
  },
  { path: 'login', component: LoginComponent },
];
