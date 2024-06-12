import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input()  project!: Project;
constructor(private router: Router, private projectService: ProjectsService)
{

}

onViewProject()
{
  this.router.navigateByUrl(`project/${this.project.id}`);
}
}
