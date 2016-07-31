/**
 * Created by bluedragonfly on 6/8/16.
 */
import { Component, Input } from '@angular/core';
import { Article } from './article'

@Component({
    selector: 'article-detail',
    template : `
        <div>
            <h1>{{article.title}}</h1>
            <h2>Par {{article.autor}} | le {{article.date}} dernière modification {{article.lastModifyDate}}</h2>
            <div>
                <label > id : </label>{{article.id}}
            </div>
            <div>
                {{article.text}}
            </div>

        </div>
    `
})
export class ArticleDetailComponent {
    @Input()
    article : Article;

}