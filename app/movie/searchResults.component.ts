/**
 * Created by bluedragonfly on 9/11/16.
 */
import { Component, Input } from '@angular/core';
import {MovieDBService} from "./movieDB.service";
import {Observable, Subject} from "rxjs";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'searchResults',
    template : `
        <searchDetail *ngFor="let result of results$ | async "
                [movie]="result"
                >
        </searchDetail>
    `
})
export class SearchResultsComponent {
    query: string;
    results$ : Subject<any>;
    sub : Subscription;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.query = params['query'];
            this.results$ = this.mvService.Search(this.query);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    constructor(private route : ActivatedRoute, private router : Router, private mvService : MovieDBService) {

    }



}