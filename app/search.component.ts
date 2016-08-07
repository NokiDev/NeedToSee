/**
 * Created by bluedragonfly on 8/7/16.
 */
import { Component, Input } from "@angular/core";
import {MovieService} from "./movie.service";
import {Subject} from "rxjs/Rx";

@Component({
    selector: 'search',
    template: `
        <input #searchBar (keyup)="onKeyUp(searchBar.value)" type="search" placeholder="Find Movies/Animes/Cartoons/Series" />
        <searchDetail *ngFor="let result of results | async"></searchDetail>
    `,
    providers : [MovieService]
})
export class SearchComponent {

    mvService:MovieService;

    results = new Subject();

    constructor(mvService:MovieService) {
        this.mvService = mvService;
    }

    onKeyUp(query:string) {
        if(query.trim()){
            this.results = this.mvService.Search(query).asObservable()
                .map((res) => {console.log(res);return res.results});
        }
    }
}