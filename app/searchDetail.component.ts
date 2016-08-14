/**
 * Created by bluedragonfly on 8/8/16.
 */
import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'searchDetail',
    template: `
        <div style="border: solid black 3px;">
            <img src="{{_posterPath}}" alt="test"/>
            <aside>
                <h1><a routerLink="/movie/{{title}}">{{title}}</a></h1>
                <p>{{_overview}}</p>
            </aside>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class SearchDetailComponent {
    @Input() id : number;
    @Input() title : string;
    _posterPath : string;
    _overview : string;
    @Input("data") _data : any;

    @Input()
    set posterPath(posterPath : string){
        if(posterPath === null){
            this._posterPath = "/uknown.png";
        }
        else{
            this._posterPath = "http://image.tmdb.org/t/p/w185/" + posterPath;
        }
    }
    @Input()
    set overview(overview : string){
        this._overview = (overview && overview.trim()) || "No resume...";
    }

    get posterPath() : string {
        return this._posterPath;
    }



}