import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, } from '@angular/platform-browser';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { UserService } from './core/services/user.service';
import { initializeAppFactory } from './app.initializer';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), 
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
  provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },{
      provide: 'APP_INITIALIZER',
      useFactory: initializeAppFactory,
      deps: [UserService],
      multi: true,
    },]
};

