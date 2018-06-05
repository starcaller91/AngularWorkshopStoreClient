import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ArticleApiService } from './articles-api.service';

@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [ArticleApiService],
})
export class ApiServiceModule { }
