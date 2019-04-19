import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Project } from './models/proyect.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  count(): number {
    return environment.projects.length;
  }
  findAll(): Project[] {
    return environment.projects;
  }

  findById(id: number): Project {
    return environment.projects.find(p => p.id == id);
  }

  filter(filter: string): Project[] {
    return environment.projects.filter(p => filter == null || p.name.toLowerCase().indexOf(filter.toLowerCase()) != -1);
  }

  saveProject(proyectoAnadir: Project) {
    proyectoAnadir.id = environment.projects.length + 1;
    environment.projects.push({ ...proyectoAnadir });
  }

  deleteProject(id: number) {
    const index = environment.projects.indexOf(environment.projects.find(c => c.id === id));
    environment.projects.splice(index, 1);
  }

  constructor() {}
}
