/**
 * Created by bluedragonfly on 8/28/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MovieListComponent} from "./movieList.component";
import {MovieDetailComponent} from "./movieDetail.component";
import {SearchResultsComponent} from "./searchResults.component";

const moviesRoutes : Routes = [
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:id', component: MovieDetailComponent},
    {path: 'movies/search/:query', component : SearchResultsComponent}
];


export const moviesRouting : ModuleWithProviders = RouterModule.forChild(moviesRoutes);
