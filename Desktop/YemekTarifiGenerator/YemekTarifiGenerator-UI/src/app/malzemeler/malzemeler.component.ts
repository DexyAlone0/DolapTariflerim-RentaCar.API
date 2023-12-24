// malzemeler.component.ts

import { Component, OnInit } from '@angular/core';
import { MalzemeService } from '../services/malzemeler.service';
import { MaterialResponse } from '../response/material-response';
import { FoodResponse } from '../response/food-response';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-malzemeler',
  templateUrl: './malzemeler.component.html',
  styleUrls: ['./malzemeler.component.css'],
})
export class MalzemelerComponent implements OnInit {
  materials: MaterialResponse[] = [];
  foods: FoodResponse[] = [];
  selectedMaterials: string[] = [];
  materialName : string = '';

  constructor(private malzemeService: MalzemeService) {}
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.malzemeService.getMaterialsAll().subscribe((data: any) => {
      this.materials = data.data.items;
    });
  }

  onCheckboxChange(materialId: number) {
    const materialIdStr = materialId.toString();
    if (this.selectedMaterials.includes(materialIdStr)) {
      this.selectedMaterials = this.selectedMaterials.filter((m) => m !== materialIdStr);
    } else {
      this.selectedMaterials.push(materialIdStr);
    }
  }

  onSearch() {
    // Seçilen malzemelere göre yiyecekleri getir
    this.malzemeService.postYiyeceklerByMaterials(this.selectedMaterials).subscribe({
      next: (data: any) => {
        console.log('Dönen Veri:', data);
        if (data && Array.isArray(data)) {
          this.foods = data; // Yiyecekleri alma
        } else {
          console.error('Geçerli veri bulunamadı:', data);
        }
      },
      error: (error: any) => {
        console.error('Hata:', error);
      }
    });
  }


}
