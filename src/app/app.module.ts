import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  //Bir component kullancağım zaman buraya o componenti eklemem gerekiyor
  //angular cli bizim yerimize ekledi
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
  ],
  //Farklı yerlerden yükleyebileceğimiz projeler var bunlara module diyoruz
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
