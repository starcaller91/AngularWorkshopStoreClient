import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockListComponent } from './stock-list.component';
import { ArticleInfoComponent } from './article-info.component';

@NgModule({
    imports: [CommonModule],
    exports: [StockListComponent],
    declarations: [StockListComponent, ArticleInfoComponent],
    providers: [],
})
export class StockListModule { }
