/**
 * Created by bluedragonfly on 8/8/16.
 */
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import {Movie} from "./movie.model";


@Component({
    selector: 'searchDetail',
    template: `
        <div (click)="displayMovieCard()" style="display: flex; width: 100%; flex-direction : row; justify-content: space-between; border: solid black 3px;">
            <img src="{{movie.posterPath}}" alt="test"/>
            <aside style="width : inherit;">
                <h1>{{movie.title}} <span *ngIf="movie.releaseDate">({{movie.releaseDate | date:"yyyy"}})</span></h1>
                <span>{{movie.voteAverage}}/10 ({{movie.voteCount}})</span>
                <p>{{movie.overview}}</p>
            </aside>
        </div>
    `
})

export class SearchDetailComponent {
    @Input() movie : Movie;

    constructor(private router : Router)
    {
        this.router = router;
    }

    displayMovieCard(){
        this.router.navigate(['/movies', this.movie.id]);
    }

}