import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditorStoreService } from './auditor-store.service';

@Injectable()
export class AuditorInterceptorService implements HttpInterceptor {
  constructor(private auditorStoreService: AuditorStoreService) {}
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(this.enviarReq.bind(this)));
  }

  private enviarReq(respuesta) {
    if (respuesta instanceof HttpResponse) {
      this.auditorStoreService.dispatch(respuesta.url);
      console.log(respuesta);
    }
  }
}
