/**
 * Created by bluedragonfly on 7/31/16.
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'movie',
    template: `
        <img src="{{imagePath}}">
        <h1>{{title}}</h1>
    `
})
export class MovieComponent {
    title:String;
    imagePath:String;
    MovieComponent(){

    }
}