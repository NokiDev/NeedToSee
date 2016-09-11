/**
 * Created by bluedragonfly on 8/28/16.
 */

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { MovieListComponent }    from './movieList.component';
import { MovieDetailComponent }  from './movieDetail.component';
import { MovieDBService } from './movieDB.service';
import { moviesRouting } from './movie.routing';
import {SearchComponent} from "./search.component";
import {SearchDetailComponent} from "./searchDetail.component";
import {SearchResultsComponent} from "./searchResults.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        moviesRouting
    ],
    declarations: [
        MovieListComponent,
        MovieDetailComponent,
        SearchComponent,
        SearchDetailComponent,
        SearchResultsComponent,
    ],
    exports : [
        SearchComponent,
        MovieListComponent
    ],
    providers: [
        MovieDBService
    ]
})
export class MoviesModule {}