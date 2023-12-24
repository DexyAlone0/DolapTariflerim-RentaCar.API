// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MalzemelerComponent } from './malzemeler/malzemeler.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YemekTarifiComponent } from './yemek-tarifi/yemek-tarifi.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FridgeProductsComponent } from './fridge-products/fridge-products.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { MaterialAddFoodComponent } from './material-add-food/material-add-food.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';


@NgModule({
  declarations: [AppComponent, YemekTarifiComponent, MalzemelerComponent, FridgeProductsComponent, MaterialAddComponent, MaterialAddFoodComponent, ImageViewerComponent],
  imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule,
   AppRoutingModule
  ],
  providers: [], // ProductRequest'i burada ekleyin
  bootstrap: [AppComponent],
})
export class AppModule {}
