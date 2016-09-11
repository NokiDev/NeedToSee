/**
 * Created by bluedragonfly on 6/8/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var rxjs_1 = require('rxjs');
var MovieDB = require('moviedb');
var movie_model_1 = require("./movie.model");
var MovieDBService = (function () {
    function MovieDBService() {
        var _this = this;
        this.mvDB = MovieDB("e3eabc398fe370ca4357335a8df07dee");
        this.searchResult$ = new rxjs_1.Subject();
        this.searchResult$.share();
        this.search$ = new rxjs_1.Subject().subscribe(function (query) {
            console.log(query);
            _this.mvDB.searchMovie({ "query": query }, function (err, res) {
                if (res !== undefined) {
                    var tmpMovies = [];
                    for (var _i = 0, _a = res.results; _i < _a.length; _i++) {
                        var result = _a[_i];
                        tmpMovies.push(new movie_model_1.Movie(result));
                    }
                    _this.searchResult$.next(tmpMovies);
                }
                console.log(res);
            });
        });
        this.movieInfos$ = new rxjs_1.Subject();
        this.movieInfos$.share();
        this.findMovie$ = new rxjs_1.Subject().subscribe(function (id) {
            console.log(id);
            _this.mvDB.movieInfo({ id: id }, function (err, res) {
                if (res !== undefined) {
                    console.log(res);
                    _this.movieInfos$.next(new movie_model_1.Movie(res));
                }
                else {
                    console.log(err);
                }
            });
        });
    }
    MovieDBService.prototype.GetMovie = function (id) {
        this.findMovie$.next(id);
        return this.movieInfos$;
    };
    MovieDBService.prototype.BuildImagePath = function (path) {
        return "http://image.tmdb.org/t/p/w185/" + path;
    };
    MovieDBService.prototype.Search = function (query) {
        this.search$.next(query);
        return this.searchResult$;
    };
    MovieDBService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MovieDBService);
    return MovieDBService;
}());
exports.MovieDBService = MovieDBService;
//# sourceMappingURL=movieDB.service.js.map