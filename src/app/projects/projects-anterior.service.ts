import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from './models/proyect.model';
import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectsAnteriorService implements ProjectsService {
  count(): Observable<number> {
    return of(environment.projects.length);
  }
  findAll(): Observable<Project[]> {
    return of(environment.projects);
  }

  findById(id: number): Observable<Project> {
    return of(environment.projects.find(p => p.id == id));
  }

  filter(filter: string): Observable<Project[]> {
    return of(environment.projects.filter(p => filter == null || p.name.toLowerCase().indexOf(filter.toLowerCase()) != -1));
  }

  saveProject(proyectoAnadir: Project): Observable<Project> {
    proyectoAnadir.id = environment.projects.length + 1;
    environment.projects.push({ ...proyectoAnadir });
    return of(proyectoAnadir);
  }

  deleteProject(id: number): Observable<void> {
    const index = environment.projects.indexOf(environment.projects.find(c => c.id === id));
    environment.projects.splice(index, 1);
    return EMPTY;
  }
}
