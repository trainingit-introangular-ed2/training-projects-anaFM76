import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditorStoreService } from './auditor/auditor-store.service';
import { AuditorModule } from './auditor/auditor.module';
import { CoreModule } from './core/core.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NoopAnimationsModule, AuditorModule, ProjectsModule],
  providers: [
    {
      provide: AuditorStoreService,
      useClass: AuditorStoreService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
