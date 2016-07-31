/**
 * Created by bluedragonfly on 6/8/16.
 */

import {Injectable} from "@angular/core";

import {ARTICLES} from "./mock-articles"
import {Article} from "./article";

@Injectable()
export class ArticleService{
    getArticles(){
        return Promise.resolve(ARTICLES);
    }

    getArticlesSlowly() {
        return new Promise<Article[]>(resolve =>
            setTimeout(()=>resolve(ARTICLES), 2000) // 2 seconds
        );
    }
}