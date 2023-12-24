import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YemekService } from '../services/yemek.service';

@Component({
  selector: 'app-material-add-food',
  templateUrl: './material-add-food.component.html',
  styleUrls: ['./material-add-food.component.css']
})
export class MaterialAddFoodComponent {

  foodId: number = 0;
  materials: any[] = []; // Materyallerin tipini uygun şekilde belirtin

  constructor(
    private route: ActivatedRoute,
    private foodService: YemekService
  ) {}

//   ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.foodId = +params['id']; // Route'tan foodId'yi alın
//       this.loadMaterials();
//     });
//   }

// //   loadMaterials() {
// //     this.foodService.getFoodMaterials(this.foodId).subscribe({
// //       next: (response) => {
// //         this.materials = response; // API'den gelen materyal verilerini saklayın
// //       },
// //       error: (error) => {
// //         console.error('Materyalleri getirme hatası:', error);
// //       },
// //       complete: () => {
// //         console.log('Materyalleri getirme işlemi tamamlandı.');
// //       }
// //     });
// //   }
// // }
  }

