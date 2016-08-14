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
/**
 * Created by bluedragonfly on 6/8/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var movie_service_1 = require('./movie.service');
var movies_component_1 = require('./movies.component');
var movie_component_1 = require('./movie.component');
var search_component_1 = require('./search.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <a routerLink=\"/movies/\">Movies</a>\n    <search></search>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent],
            providers: [
                movie_service_1.MovieService
            ],
            precompile: [
                AppComponent,
                movies_component_1.MoviesComponent,
                movie_component_1.MovieComponent,
                search_component_1.SearchComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map