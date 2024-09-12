import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BlogGateway } from '@domain/entities/posts/blog.gateway';
import { PostManagementGatewayService } from '@infrastructure/driven-adapters/posts/post-management.service';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SpinnerInterceptor } from '@ui/shared/services/interceptors/spinner.interceptor';
import { SessionGateway } from '@domain/entities/user/session.gateway';
import { CognitoAuthService } from '@infrastructure/driven-adapters/user/cognito-auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi()),
    // Casos de uso
    { provide: BlogGateway, useClass: PostManagementGatewayService },
    { provide: SessionGateway, useClass: CognitoAuthService },
    // Interceptors
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
};
