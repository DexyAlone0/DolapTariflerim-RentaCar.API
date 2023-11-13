import { Component } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { BrandResponse } from '../response/brand-response';
import { ModelResponse } from '../response/model-response';
import { CarDetailService } from '../services/car-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CreateCarService } from '../services/create-car.service';
import { CarDetailResponse } from '../response/car-detail-response';



@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  items: CarDetailResponse[] | undefined;
  allData : CarDetailResponse[] | undefined;
  carId : number=0;
  constructor(private carDetailService: CarDetailService)
  {

  }

  ngOnInit() {
    this.carDetailService.getItemsAll().subscribe({
      next: (data: CarDetailResponse[]) => {
        // next
        this.allData = data;
        this.items = data;
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
        // complete
      }
    });

  }
}


