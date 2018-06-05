import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';

@Component({
    selector: 'article-info',
    templateUrl: 'article-info.component.html'
})

export class ArticleInfoComponent implements OnInit {
    @Input() article: Article;
    @Output() increasePrice = new EventEmitter<number>();
    constructor() { }

    ngOnInit() { }

    increaseArticlePrice() {
        this.increasePrice.emit(this.article.id);
    }
}