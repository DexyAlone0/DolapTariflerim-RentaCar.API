import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { CarDetailResponse } from '../response/car-detail-response';
import { CarDetailService } from '../services/car-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-count',
  templateUrl: './car-count.component.html',
  styleUrls: ['./car-count.component.css']
})
export class CarCountComponent {
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
