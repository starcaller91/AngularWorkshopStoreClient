import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockListModule } from './stock-list/stock-list.module';
import { ApiServiceModule } from './api-services/api-service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockListModule,
    ApiServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
