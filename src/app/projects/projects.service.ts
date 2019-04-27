import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/proyect.model';

@Injectable()
export class ProjectsService {
  count: () => Observable<number>;
  findAll: () => Observable<Project[]>;
  findById: (id: Number) => Observable<Project>;
  filter: (filter: string) => Observable<Project[]>;
  saveProject: (proyectoAnadir: Project) => Observable<Project>;
  deleteProject: (id: number) => Observable<void>;
  constructor() {}
}
