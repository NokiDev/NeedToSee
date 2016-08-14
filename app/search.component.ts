/**
 * Created by bluedragonfly on 8/7/16.
 */
import { Component, Input } from "@angular/core";
import {MovieService} from "./movie.service";
import {Observable, Subject} from "rxjs/Rx";
import {SearchDetailComponent} from './searchDetail.component';
import {Movie} from './movie.model'

@Component({
    selector: 'search',
    template: `
        <input #searchBar (keyup)="onKeyUp(searchBar.value)" type="search" placeholder="Find Movies/Animes/Cartoons/Series" />
        <searchDetail *ngFor="let result of results$ | async"
            [title]="result.title"
            [posterPath]="result.poster_path"
            [overview] ="result.overview"
            [data]="result"
            >
        </searchDetail>
    `,
    providers : [MovieService],
    directives : [SearchDetailComponent]
})
export class SearchComponent {

    mvService:MovieService;

    results$ : Observable<any>;

    constructor(mvService:MovieService) {
        this.mvService = mvService;
    }

    onKeyUp(query:string) {
        if(query.trim()) {
            this.results$ = this.mvService.Search(query);

        }else{
            this.results$ = null;
        }
    }
}