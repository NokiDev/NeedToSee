/**
 * Created by bluedragonfly on 7/31/16.
 */
import { Component, Input } from '@angular/core';
import {Movie} from './movie.model';


@Component({
    selector: 'movies',
    template : `
        <movie *ngFor="let movie of movies">
    `
})
export class MoviesComponent {
    movies : Array<Movie>;




}