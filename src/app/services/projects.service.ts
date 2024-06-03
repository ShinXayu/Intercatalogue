import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private Projects: Project[]  = [
    new Project(
      'Application todo list',
      'Notez vos tâches à faire pour ne pas les oublier !',
      new Date("2022"),
      "Jean dupont",
      ["PHP", "Javscript", "Laravel"],
      "https://gity.com/topics/todolist?l=php",
      "jeandupont@consultants-solutec.fr"
    ),
    new Project(
        'Activity Finder',
        'Postez vos annonces et trouver du monde pour participer à vos activités ',
        new Date("2023"),
        "Thomas Roder",
        ["C#", "APS.net", "ReactJS", "Agile", "Jira"],
        "https://github.com/Ismail-cetulos/ActivityFinder/",
        "troder@outlook.fr"
      ),
      new Project(
        'Migdrive',
        'Outils de migration de données de serveurs windows vers google drive',
        new Date("2022"),
        "Thomas M",
        ["Powershell", "Ansible", "Appscript", "Javascript", "Gitlab CI CD"],
        "https://gity.com/topics/Migdrive",
        "tm@gmail.com"
      ),
      new Project(
        'My map',
        'Application d\'affichage d\'objets personnalisés sur une carte',
        new Date("2020"),
        "Ismail M",
        ["VueJS", "Javascript", "PHP", "Laravel", "Apache"],
        "https://gity.com/topics/Mymap",
        "imrzg@gmail.com"
      ),
      new Project(
        'Collab Roadmap',
        'Moteur de recherche d\'itinéraire entre 2 points et estimation des couts de trajet',
        new Date("2022"),
        "Gaston Lafarge",
        ["Javascript", "PHP", "MySQL", "API GOOGLE"],
        "https://gity.com/topics/RMAP",
        "glafarge@solutec.fr"
      ),
  ];
  
  getProjects(): Project[] {
    return [...this.Projects];
  }

  

 getProjectById(ProjectId: string): Project {
  const foundProject = this.Projects.find(Project => Project.id === ProjectId);
  if (!foundProject) {
    throw new Error('Project not found!');
  }
  return foundProject;
}

 submitProject(project: any)
 {
    project = new Project(project.title, project.description, project.createdDate, project.creator, project.tags_list,project.url,project.email)
    this.Projects.push(project)
 }

}