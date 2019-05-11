import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuditorStoreService } from '../../../auditor/auditor-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  envLabel;
  title = environment.appName;
  url: Observable<string>;
  constructor(private auditorStoreService: AuditorStoreService) {
    this.envLabel = environment.envLabel;
  }

  ngOnInit() {
    this.url = this.auditorStoreService.select$();
  }
}
