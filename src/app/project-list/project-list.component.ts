import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
import { NgFor } from '@angular/common';
import { SingleProjectComponent } from '../single-project/single-project.component';
import { ProjectComponent } from '../project/project.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [ProjectListComponent, NgFor, SingleProjectComponent, ProjectComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  Projects: Project[];
  projects$! : Observable<Project[]>
  constructor(private ProjectsService: ProjectsService, private router: Router)
  {
    this.Projects = ProjectsService.getProjects()
  }
}
