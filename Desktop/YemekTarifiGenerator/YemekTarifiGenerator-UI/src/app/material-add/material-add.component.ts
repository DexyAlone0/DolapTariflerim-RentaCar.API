import { Component } from '@angular/core';
import { MalzemeService } from '../services/malzemeler.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.css']
})
export class MaterialAddComponent {
  materialName : string = '';

  constructor(private malzemeService: MalzemeService) {}
  private subscription: Subscription | undefined;


  createMaterial() {
    this.subscription = this.malzemeService.createMaterial(this.materialName)
      .subscribe({
        next: (response: any) => {
          console.log('Yemek oluşturuldu:', response);
          // İsteğe göre işlemler yapabilirsiniz
        },
        error: (error: any) => {
          console.error('Yemek oluşturulurken hata oluştu:', error);
          // İsteğe göre hata işlemleri yapabilirsiniz
        },
        complete: () => {
          console.log('İstek tamamlandı.');
          // İsteğe göre işlemler yapabilirsiniz
        }
      });
  }
}
