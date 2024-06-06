import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Input } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
    @Input() project!: Project;
    constructor(private router: Router, private route: ActivatedRoute, private projectsService : ProjectsService)
    {

    }
    ngOnInit()
    {
      this.getProject()
    }
    private getProject() {
      const projectId = this.route.snapshot.params['id'];

      try {
      this.project = this.projectsService.getProjectById(projectId);
      }
      catch
      {
        this.router.navigateByUrl("projects")
        console.log("not found")
        console.log("Id recup:" + projectId)
      }
    }

     returnToProjects()
    {
      this.router.navigateByUrl("projects")
    }
}
