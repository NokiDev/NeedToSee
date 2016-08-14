/**
 * Created by bluedragonfly on 8/6/16.
 */

import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie.component';
import {AppComponent} from "./app.component";

export const AppRoutes = [
    {path: '', component : AppComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'movie/:title', component: MovieComponent}
];