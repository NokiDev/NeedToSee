/**
 * Created by bluedragonfly on 6/8/16.
 */
import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MovieService }     from './movie.service';
import { MoviesComponent } from './movies.component';
import { SearchComponent } from './search.component';

@Component({
    selector: 'app',
    template: `
    <a routerLink="/movies/">Movies</a>
    <search></search>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES, SearchComponent],
    providers: [
        MovieService
    ],
    precompile:[
        AppComponent,
        MoviesComponent,
        SearchComponent
    ]
})

export class AppComponent {
}