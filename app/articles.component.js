var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var article_detail_component_1 = require('./article-detail.component');
var article_service_1 = require('./article.service');
var ArticlesComponent = (function () {
    function ArticlesComponent(articleService) {
        this.articleService = articleService;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.articleService.getArticlesSlowly().then(function (articles) { return _this.articles = articles; });
    };
    ArticlesComponent.prototype.onSelect = function (news) {
        this.selectedArticle = news;
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            selector: 'articles',
            template: "\n  <ul>\n    <li class=\"newsBlock\" *ngFor=\"let article of articles\"\n      [class.selected]=\"article === selectedArticle\"\n      (click)=\"onSelect(article)\">\n      <h2>{{article.name}} details!</h2>\n      <div><label>id: </label>{{article.id}}</div>\n      <div>\n        <label>name: </label>\n        {{article.name}}\n      </div>\n    </li>\n  </ul>\n  <article-detail *ngIf=\"selectedArticle\" [article]=\"selectedArticle\"></article-detail>\n  ",
            styles: ["\n    .newsBlock {\n      background-color : green;\n    }\n    .selected {\n      background-color : blue !important;\n    }\n  "],
            directives: [article_detail_component_1.ArticleDetailComponent]
        }), 
        __metadata('design:paramtypes', [article_service_1.ArticleService])
    ], ArticlesComponent);
    return ArticlesComponent;
})();
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map