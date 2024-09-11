import { SpinnerService } from '@ui/components/molecules/spinner/spinner.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private readonly spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/posts') && req.method === 'DELETE') {
      console.log('Interceptando delete: ', req.url);
      this.spinnerService.show();

      return next.handle(req).pipe(
        finalize(() => {
          this.spinnerService.hide();
        })
      );
    }

    return next.handle(req);
  }
}
