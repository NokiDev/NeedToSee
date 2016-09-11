/**
 * Created by bluedragonfly on 8/6/16.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ActivityResumeComponent } from "./activityResume.component";
import {PageNotFoundComponent} from "./error/pageNotFound.component";

const appRoutes : Routes = [
    {path: '', component : ActivityResumeComponent },
    {path: '**', component : PageNotFoundComponent}
];

export const appRoutingProviders : any[] = [

];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);