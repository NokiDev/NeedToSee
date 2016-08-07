/**
 * Created by bluedragonfly on 6/8/16.
 */

import {Injectable} from "@angular/core";
import {Observable, Subject} from 'rxjs/Rx';

import MovieDB = require('moviedb');
import any = jasmine.any;
import search = require("core-js/fn/symbol/search");



@Injectable()
export class MovieService {

    mvDB : MovieDB.IMovieDB = MovieDB("e3eabc398fe370ca4357335a8df07dee");
    searchResult = new Subject();

    constructor(){

    }

    Search(query: string) : Subject<any> {

        this.mvDB.searchMovie({"query" : query}, (err : any, res : any) => { this.searchResult.next(res);});
        return this.searchResult;
    }


}