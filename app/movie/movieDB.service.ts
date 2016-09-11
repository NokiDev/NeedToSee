/**
 * Created by bluedragonfly on 6/8/16.
 */

import {Injectable} from "@angular/core";
import {Observable, Subject, Observer} from 'rxjs';

import MovieDB = require('moviedb');
import any = jasmine.any;
import {Movie} from "./movie.model";

@Injectable()
export class MovieDBService {

    mvDB : MovieDB.IMovieDB = MovieDB("e3eabc398fe370ca4357335a8df07dee");
    search$ : any;
    searchResult$ : any;
    movieInfos$ : any;
    findMovie$ : any;

    constructor(){
        this.searchResult$ = new Subject();
        this.searchResult$.share();
        this.search$ = new Subject<string>().subscribe((query:string)=> {
            console.log(query);
            this.mvDB.searchMovie({"query": query}, (err:any, res:any) => {
                if(res !== undefined){
                    var tmpMovies = [];
                    for(let result of res.results){
                        tmpMovies.push(new Movie(result));
                    }
                    this.searchResult$.next(tmpMovies);
                }
                console.log(res);
            });
        });
        this.movieInfos$=new Subject();
        this.movieInfos$.share();
        this.findMovie$ = new Subject<number>().subscribe((id:number) => {
            console.log(id);
            this.mvDB.movieInfo({id: id}, (err : any, res: any) => {
               if(res !== undefined){
                    console.log(res);

                    this.movieInfos$.next(new Movie(res));
               }else{
                   console.log(err);
               }
            });
        });
    }

    GetMovie(id : number) : Subject<any>{
        this.findMovie$.next(id);
        return this.movieInfos$;
    }

    BuildImagePath(path : string){
        return "http://image.tmdb.org/t/p/w185/" + path;
    }

    Search(query: string) : Subject<any> {

        this.search$.next(query);
        return this.searchResult$;
    }


}