import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http:HttpClient)
  {

  }
  private Projects: Project[]  = [
    new Project(
      'Application todo list',
      'Notez vos tâches à faire pour ne pas les oublier !',
      new Date("2022"),
      "Jean",
      "Dupont",
      ["PHP", "Javscript", "Laravel"],
      "https://gity.com/topics/todolist?l=php",
      "jeandupont@consultants-solutec.fr"
    ),
    new Project(
        'Activity Finder',
        'Postez vos annonces et trouver du monde pour participer à vos activités ',
        new Date("2023"),
        "Thomas",
        "Roder",
        ["C#", "APS.net", "ReactJS", "Agile", "Jira"],
        "https://github.com/Ismail-cetulos/ActivityFinder/",
        "troder@outlook.fr"
      ),
      new Project(
        'Migdrive',
        'Outils de migration de données de serveurs windows vers google drive',
        new Date("2022"),
        "Thomas",
        "M",
        ["Powershell", "Ansible", "Appscript", "Javascript", "Gitlab CI CD"],
        "https://gity.com/topics/Migdrive",
        "tm@gmail.com"
      ),
      new Project(
        'My map',
        'Application d\'affichage d\'objets personnalisés sur une carte',
        new Date("2020"),
        "Ismail",
        "M",
        ["VueJS", "Javascript", "PHP", "Laravel", "Apache"],
        "https://gity.com/topics/Mymap",
        "imrzg@gmail.com"
      ),
      new Project(
        'Collab Roadmap',
        'Moteur de recherche d\'itinéraire entre 2 points et estimation des couts de trajet',
        new Date("2022"),
        "Gaston",
        "Lafarge",
        ["Javascript", "PHP", "MySQL", "API GOOGLE"],
        "https://gity.com/topics/RMAP",
        "glafarge@solutec.fr"
      ),
  ];
  
  getProjects(): Project[] {
    return [...this.Projects];
  }

  getAllProjects(): Observable<Project[]>
  {
    return this.http.get<Project[]>('http://localhost:8080/Projects')
  }

 /*getProjectById(ProjectId: string): Project {
  const foundProject = this.Projects.find(Project => Project.id === ProjectId);
  if (!foundProject) {
    throw new Error('Project not found!');
  }
  return foundProject;
} */
  getProjectById(ProjectId: string)
  {
    return this.http.get<Project>(`http://localhost:8080/Project/${ProjectId}`)
  }
  splitString(inputString: string) {
  // Vérifie si l'entrée est une chaîne de caractères
  if (typeof inputString !== 'string') {
    throw new TypeError('L\'entrée doit être une chaîne de caractères');
  }

  // Utilise la méthode split() pour diviser la chaîne en un tableau de mots
  const resultArray = inputString.split(',');

  // Supprime les espaces en trop autour de chaque mot
  const trimmedArray = resultArray.map(word => word.trim());

  // Filtre les éléments vides au cas où il y aurait des virgules multiples ou des espaces vides
  const filteredArray = trimmedArray.filter(word => word.length > 0);

  return filteredArray;
}


 submitProject(project: any)
 {
    project = new Project(project.title, project.description, project.creationDate, project.creatorName,project.creatorSurname, project.tags_list,project.url,project.email)
    this.Projects.push(project)
 }
 addProject(formValue: { title: string, description: string, creatorName:string, creatorSurname: string, email: string, tags: string, creationDate: Date, url: string }): Observable<Project> {
  console.log("Ajout projet")
  return this.http.post<Project>(
          'http://localhost:8080/Project',
          {...formValue});
}
 submitProjectReactiveForm(formValue: {title: string, description: string, creatorName: string, creatorSurname: string, email: string, creationDate: Date, tags: string[], url: string})
 {
    const project : Project =
    {
      ...formValue,
      id:  Math.floor(Math.random()*100000000000).toString()
    }
    this.Projects.push(project)
 }
}