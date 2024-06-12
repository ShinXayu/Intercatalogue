import { Component } from '@angular/core';
import { Project } from '../models/project';
import { FormsModule, NgForm, ReactiveFormsModule, FormGroup, FormBuilder, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import { ProjectsService } from '../services/projects.service';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-submit-project',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './submit-project.component.html',
  styleUrl: './submit-project.component.scss'
})
export class SubmitProjectComponent {

  projectPreview$!: Observable<Project>;

  projectForm!: FormGroup;

  optionalUrlValidator(): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null =>  {
      if (!control.value) {
        return null;  // Pas de validation si le champ est vide
      }

      // Validation si le champ est rempli
      const urlPattern =/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
      return urlPattern.test(control.value) ? null : { invalidUrl: true };
    };
  }
  constructor(private ProjectsService : ProjectsService, private router: Router, private formBuilder: FormBuilder)
  {

  }
  ngOnInit()
  {
    this.projectForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      creatorName: [null,Validators.required],
      creatorSurname: [null,Validators.required],
      email: [null,Validators.required],
      tags: [null,Validators.required],
      creationDate: [null,Validators.required],
      url: [null,[this.optionalUrlValidator()]]
    })


    this.projectPreview$ = this.projectForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue
      })))
  }

  onSubmitForm() {
    this.projectForm.value.tags = this.projectForm.value.tags.split(",")
    console.log(this.projectForm.value.tags)
    //this.ProjectsService.submitProjectReactiveForm(this.projectForm.value)
    this.ProjectsService.addProject(this.projectForm.value).pipe(tap(()=> this.router.navigateByUrl("/projects"))).subscribe();
   // this.router.navigateByUrl("/projects")
  }
}
