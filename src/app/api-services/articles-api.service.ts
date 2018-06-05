import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { environment } from '../../environments/environment';
import { Article } from '../stock-list/article.model';


@Injectable()
export class ArticleApiService {
    private readonly apiUri = `${environment.baseUrl}/articles`

    constructor(private http: HttpClient) { }

    getArticles(): Observable<Array<Article>> {
        return this.http.get(this.apiUri)
            .pipe(
                map(x => x as Array<Article>)
            );
    }
}