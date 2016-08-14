/**
 * Created by bluedragonfly on 6/8/16.
 */

import {Injectable} from "@angular/core";
import {Observable, Subject, Observer} from 'rxjs/Rx';

import MovieDB = require('moviedb');
import any = jasmine.any;

@Injectable()
export class MovieService {

    mvDB : MovieDB.IMovieDB = MovieDB("e3eabc398fe370ca4357335a8df07dee");
    search$ : any;
    searchResult$ : any;

    constructor(){
        this.searchResult$ = new Subject();

        this.searchResult$.share();
        this.search$ = new Subject<string>().subscribe((query:string)=> {
            this.mvDB.searchMovie({"query": query}, (err:any, res:any) => {
                if(res !== undefined){
                    this.searchResult$.next(res.results);
                }
            });
        });
    }

    BuildImagePath(path : string){
        return "http://image.tmdb.org/t/p/w185/" + path;
    }

    Search(query: string) : Subject<any> {
        this.search$.next(query);
        return this.searchResult$;
    }


}