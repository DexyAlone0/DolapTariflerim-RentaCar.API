import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalzemelerComponent } from './malzemeler/malzemeler.component';
import { YemekTarifiComponent } from './yemek-tarifi/yemek-tarifi.component';
import { FridgeProductsComponent } from './fridge-products/fridge-products.component';
import { MaterialAddComponent } from './material-add/material-add.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

const routes: Routes = [
  { path: 'malzemeler', component: MalzemelerComponent },
  { path : 'buzdolabı', component : FridgeProductsComponent},
  { path : 'yemek-olustur', component : YemekTarifiComponent},
  { path : 'malzeme-olustur', component : MaterialAddComponent},
  { path : 'resim' , component : ImageViewerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
