import { ArticleApiService } from '../api-services/articles-api.service';
import { Article } from './article.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stock-list',
    templateUrl: 'stock-list.component.html',
    styleUrls: ['stock-list.component.scss']
})

export class StockListComponent implements OnInit {
    articles: Array<Article>;
    constructor(private articleApiService: ArticleApiService) { }

    ngOnInit() { 
        this.articleApiService.getArticles().subscribe(x => this.articles = x);
    }

    increasePriceByTen(id: number) {
        const article = this.articles.find(x => x.id === id);
        article.price += 10;
    }
}