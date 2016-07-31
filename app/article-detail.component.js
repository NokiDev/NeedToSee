var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by bluedragonfly on 6/8/16.
 */
var core_1 = require('@angular/core');
var article_1 = require('./article');
var ArticleDetailComponent = (function () {
    function ArticleDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', article_1.Article)
    ], ArticleDetailComponent.prototype, "article", void 0);
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'article-detail',
            template: "\n        <div>\n            <h1>{{article.title}}</h1>\n            <h2>Par {{article.autor}} | le {{article.date}} derni\u00E8re modification {{article.lastModifyDate}}</h2>\n            <div>\n                <label > id : </label>{{article.id}}\n            </div>\n            <div>\n                {{article.text}}\n            </div>\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
})();
exports.ArticleDetailComponent = ArticleDetailComponent;
//# sourceMappingURL=article-detail.component.js.map