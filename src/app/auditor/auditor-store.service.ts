import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuditorStoreService {
  private token = '';
  private token$ = new BehaviorSubject<string>(this.token);

  constructor() {}
  public select$ = () => this.token$.asObservable();
  public dispatch(token) {
    this.token = token;
    this.token$.next(this.token);
  }
}
