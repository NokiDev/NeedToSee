/**
 * Created by bluedragonfly on 6/8/16.
 */
import { Component, Input } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ArticleService }     from './article.service';
import { ArticlesComponent } from './articles.component';

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Articles']">Articles</a>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES,ArticlesComponent],
    providers: [
        ROUTER_PROVIDERS,
        ArticleService
    ]
})

@RouteConfig([
    {
        path: '/articles',
        name: 'Articles',
        component: ArticlesComponent
    }
])

export class AppComponent {
    title = 'Japan Vrac';
}