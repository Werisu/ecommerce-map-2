import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { httpErrosInterceptor } from './interceptors/http-erros/http-erros.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withPreloading(NoPreloading),
      withComponentInputBinding()
    ),
    provideHttpClient(withInterceptors([httpErrosInterceptor])),
    provideAnimationsAsync(),
  ],
};
