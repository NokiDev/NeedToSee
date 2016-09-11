/**
 * Created by bluedragonfly on 6/8/16.
 */
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <header style="background-color: #00b3ee; height : 200px;">
        <div style="border-bottom: black solid 2px;">
            <h1 style="text-align:center;color:white;">NEED TO SEE v0.001</h1>
        </div>
        <search></search>
    </header>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
}