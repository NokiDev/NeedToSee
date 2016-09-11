/**
 * Created by bluedragonfly on 8/28/16.
 */
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { MoviesModule } from './movie/movies.module';
import {PageNotFoundComponent} from "./error/pageNotFound.component";
import {ActivityResumeComponent} from "./activityResume.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        MoviesModule
    ],
    declarations: [
        AppComponent,
        ActivityResumeComponent,
        PageNotFoundComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}