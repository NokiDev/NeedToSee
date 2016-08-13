/**
 * Created by bluedragonfly on 8/8/16.
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'searchDetail',
    template: `
        <div>Je suis un test</div>
    `

})

export class SearchDetail {
    @Input() result : any;
    Movie


}