import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

bootstrap(AppComponent,[
    provideRouter(AppRoutes),
    disableDeprecatedForms(),
    provideForms()
])
.catch((err : any) => console.error(err));
