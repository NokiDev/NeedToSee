/**
 * Created by bluedragonfly on 8/7/16.
 */
import { Component, Input } from "@angular/core";
import {MovieService} from "./movie.service";
import {Observable, Subject} from "rxjs/Rx";

@Component({
    selector: 'search',
    template: `
        <input #searchBar (keyup)="onKeyUp(searchBar.value)" type="search" placeholder="Find Movies/Animes/Cartoons/Series" />
        <div *ngFor="let result of results">{{result.original_title}}</div>
    `,
    providers : [MovieService]
})
export class SearchComponent {

    mvService:MovieService;

    results : any;

    constructor(mvService:MovieService) {
        this.mvService = mvService;
    }

    onKeyUp(query:string) {
        if(query.trim()) {
            this.mvService.Search(query).subscribe((res) => {console.log(res); this.results = res;});
        }
        this.results= [];
    }
}