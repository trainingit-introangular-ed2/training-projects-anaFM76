import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuditorStoreService } from '../../auditor/auditor-store.service';

@Component({
  selector: 'app-layout-mat',
  templateUrl: './layout-mat.component.html',
  styleUrls: ['./layout-mat.component.css']
})
export class LayoutMatComponent implements OnInit {
  @Input() numProjects: number;
  url: Observable<string>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, private auditor: AuditorStoreService) {}

  ngOnInit(): void {
    this.url = this.auditor.select$();
  }
}
