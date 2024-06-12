import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Input } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, AsyncPipe],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
    @Input() project!: Project;
    project$! : Observable<Project>;

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
      this.project$ = this.projectsService.getProjectById(projectId);
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
