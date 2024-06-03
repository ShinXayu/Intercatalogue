import { Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { SubmitProjectComponent } from './submit-project/submit-project.component';

export const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: '', component: LandingPageComponent},
  { path: 'projects/:id', component: SingleProjectComponent},
  { path: 'submit', component: SubmitProjectComponent}
];