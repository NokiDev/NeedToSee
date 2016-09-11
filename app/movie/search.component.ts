/**
 * Created by bluedragonfly on 8/7/16.
 */
import { Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: 'search',
    template: `
        <div style="text-align:center;height :80px;width : 800px; display : block; margin:auto;">
            <input #searchBar style="width:100%; height: 100%; font-size : 2em;" (keyup)="onKeyUp(searchBar.value)" type="search" placeholder="Find Movies/Animes/Cartoons/Series" />
        </div>
    `
})
export class SearchComponent {

    constructor(private router : Router) {

    }

    onKeyUp(query:string) {
        if(query.trim()) {
            this.router.navigate(['/movies/search', query]);
        }
    }
}