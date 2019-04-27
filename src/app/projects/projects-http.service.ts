import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Project } from './models/proyect.model';
import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectsHttpService implements ProjectsService {
  count(): Observable<number> {
    return this.findAll().pipe(map(x => (x == null ? 0 : x.length)));
  }
  findAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(environment.urlapi).pipe(map(this.cambiarIds));
  }
  cambiarIds(projects: Project[]): Project[] {
    if (projects != null) {
      projects.forEach(p => {
        p['id'] = p['_id'];
        delete p['_id'];
      });
    }
    return projects;
  }

  cambiarId(project: Project): Project {
    if (project != null) {
      project['id'] = project['_id'];
      delete project['_id'];
    }
    return project;
  }

  findById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(environment.urlapi + '/' + id).pipe(map(this.cambiarId));
  }

  filter(filter: string): Observable<Project[]> {
    return this.findAll().pipe(
      map(projects => [...projects.filter(p => filter == null || p.name.toLowerCase().indexOf(filter.toLowerCase()) != -1)])
    );
  }

  saveProject(proyectoAnadir: Project): Observable<Project> {
    return this.httpClient.post<Project>(environment.urlapi, proyectoAnadir);
  }

  deleteProject(id: number): Observable<any> {
    return this.httpClient.delete(environment.urlapi + '/' + id);
  }

  constructor(private httpClient: HttpClient) {}
}
