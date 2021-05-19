import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomHttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const hardcodedToken = environment.goRestToken;
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${hardcodedToken}`
      }
    });
    return next.handle(request)
    .pipe(
      retry(3),

      catchError((error: HttpErrorResponse) => {
        // TODO: Add error handling logic here
        alert(`HTTP Error: ${request.url}`);
        return throwError(error);
      }),

      // PROFILING
      finalize(() => {
        const profilingMsg = `${request.method} "${request.urlWithParams}"`;
        console.log(profilingMsg);
      })
    )
  }
}
