import { Component } from '@angular/core';
import { Project } from '../models/project';
import { FormsModule, NgModel } from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './submit-project.component.html',
  styleUrl: './submit-project.component.scss'
})
export class SubmitProjectComponent {

    project = {
      title: '',
      description: '',
      creator: '',
      email: '',
      tags: '',
      tags_list: [''],
      creationDate: '',
      url: ''
    };
  constructor(private ProjectsService : ProjectsService, private router: Router)
  {

  }
  onSubmit(): void {
    this.project.tags_list = this.project.tags.split(',').map(tag => tag.trim()); // Conversion des tags en tableau
    this.ProjectsService.submitProject(this.project)
    this.router.navigateByUrl("projects")
}
}
