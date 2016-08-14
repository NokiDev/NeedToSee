/**
 * Created by bluedragonfly on 8/6/16.
 */
"use strict";
var movies_component_1 = require('./movies.component');
var movie_component_1 = require('./movie.component');
var app_component_1 = require("./app.component");
exports.AppRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'movies', component: movies_component_1.MoviesComponent },
    { path: 'movie/:title', component: movie_component_1.MovieComponent }
];
//# sourceMappingURL=app.routes.js.map