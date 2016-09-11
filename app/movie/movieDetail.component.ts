/**
 * Created by bluedragonfly on 7/31/16.
 */
import { Component, Input } from '@angular/core';
import {MovieDBService} from "./movieDB.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs"

@Component({
    selector: 'movie',
    template: `
        <div>
            <img src="http://image.tmdb.org/t/p/w300/{{(movie$ |async)?.poster_path}}">
            <h1>{{(movie$ |async)?.title}}</h1>
            <span>{{(movie$ |async)?.vote_average}}/10</span>
            <span>{{(movie$ |async)?.vote_count}}</span>
        </div>
        <h2>Overview :</h2>
        <p>{{(movie$ | async)?.overview}}</p>
        <button (click)="addToList()">NEED TO SEE IT</button>

    `
})
export class MovieDetailComponent {
    imagePath:String;
    movie$ : any;
    sub : Subscription;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            console.log("sub");
            this.movie$ = this.service.GetMovie(id);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    constructor(private route : ActivatedRoute, private router : Router, private service : MovieDBService){

    }

    addToList(){
        console.log("Added to list");
    }
}