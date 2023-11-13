import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CarDetailService } from "../services/car-detail.service"
import { CarInfoResponse } from '../response/car-info-response';
import { ActivatedRoute } from '@angular/router';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  @ViewChild(ImageViewerComponent) imageViewerComponent: ImageViewerComponent;
  @Input() item: CarInfoResponse = new CarInfoResponse();
  carId : number;
  constructor(private carDetailService: CarDetailService, private activatedRoute : ActivatedRoute)
  {
    this.activatedRoute.params.subscribe(p => {
      this.carId = p["carId"]
    })
  }

  ngOnInit() {
    this.carDetailService.getItemsById(this.carId).subscribe({
      next: (data: CarInfoResponse) => {
        // next
        this.item = data;
        this.imageViewerComponent.showFile(this.item.fileId);
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
