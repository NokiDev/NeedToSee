import { Component,OnInit } from '@angular/core';
import { Article } from './article'
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleService } from './article.service';


@Component({
  selector: 'articles',
  template:`
  <ul>
    <li class="newsBlock" *ngFor="let article of articles"
      [class.selected]="article === selectedArticle"
      (click)="onSelect(article)">
      <h2>{{article.name}} details!</h2>
      <div><label>id: </label>{{article.id}}</div>
      <div>
        <label>name: </label>
        {{article.name}}
      </div>
    </li>
  </ul>
  <article-detail *ngIf="selectedArticle" [article]="selectedArticle"></article-detail>
  `,
  styles : [`
    .newsBlock {
      background-color : green;
    }
    .selected {
      background-color : blue !important;
    }
  `],
  directives: [ArticleDetailComponent]
})

export class ArticlesComponent implements OnInit{

  ngOnInit(){
      this.getArticles();
  }
  constructor(private articleService : ArticleService){

  }

  getArticles(){
    this.articleService.getArticlesSlowly().then(articles => this.articles = articles);
  }

  articles : Article[];
  selectedArticle : Article;
  onSelect(news : Article) {
    this.selectedArticle = news;
  }

}
