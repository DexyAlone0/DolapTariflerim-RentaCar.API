import { ImageViewerComponent } from './../image-viewer/image-viewer.component';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { CarDetailService } from "../services/car-detail.service"
import { CarDetailResponse } from '../response/car-detail-response';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent {
@ViewChild(ImageViewerComponent) imageViewerCompoent : ImageViewerComponent;
 item: any=null;
 carId : number=0;



 constructor(private carDetailService: CarDetailService)
 {

 }

 getByCarId(carId: number){
  this.carDetailService.getItemsById(carId).subscribe({
    next: (data: CarDetailResponse) => {
      // next
      this.item = data;
      this.imageViewerCompoent.showFile(this.item.fileId);
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
