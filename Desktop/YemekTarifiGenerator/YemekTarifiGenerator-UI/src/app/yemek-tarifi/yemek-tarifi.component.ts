import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { YemekService } from '../services/yemek.service';

@Component({
  selector: 'app-yemek-tarifi',
  templateUrl: './yemek-tarifi.component.html',
  styleUrls: ['./yemek-tarifi.component.css']
})
export class YemekTarifiComponent implements OnInit {

  foodName: string = '';
  foodRecipe : string = '';
  materials : any[] = [];

  private subscription: Subscription | undefined;

  constructor(private foodService: YemekService) { }

  ngOnInit(): void {
    this.foodService.getMaterialsAll().subscribe((data: any) => {
      this.materials = data.data.items.map((material: any) => ({ ...material, selected: false }));
      console.log(this.materials);
    });
  }


  createFood() {
    this.subscription = this.foodService.createFood(this.foodName , this.foodRecipe)
      .subscribe({
        next: (response) => {
          console.log('Yemek oluşturuldu:', response);
          // İsteğe göre işlemler yapabilirsiniz
        },
        error: (error) => {
          console.error('Yemek oluşturulurken hata oluştu:', error);
          // İsteğe göre hata işlemleri yapabilirsiniz
        },
        complete: () => {
          console.log('İstek tamamlandı.');
          // İsteğe göre işlemler yapabilirsiniz
        }
      });
  }

  ngOnDestroy() {
    // Component yok edildiğinde subscription'ı temizleme
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
