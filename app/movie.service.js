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
var Rx_1 = require('rxjs/Rx');
var MovieDB = require('moviedb');
var MovieService = (function () {
    function MovieService() {
        var _this = this;
        this.mvDB = MovieDB("e3eabc398fe370ca4357335a8df07dee");
        this.searchResult$ = new Rx_1.Subject();
        this.search$ = new Rx_1.Subject().subscribe(function (query) {
            _this.mvDB.searchMovie({ "query": query }, function (err, res) {
                _this.searchResult$.next(res.results);
            });
        });
    }
    MovieService.prototype.Search = function (query) {
        this.search$.next(query);
        return this.searchResult$;
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map