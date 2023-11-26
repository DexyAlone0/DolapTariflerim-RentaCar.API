import { Router } from '@angular/router';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CarDetailService } from "../services/car-detail.service"
import { CarDetailResponse } from '../response/car-detail-response';
import { ActivatedRoute } from '@angular/router';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})

export class CarDetailComponent implements AfterViewInit {
  @Input() item: CarDetailResponse | any;
  @ViewChild(ImageViewerComponent) imageViewerComponent: ImageViewerComponent;

  constructor(private carDetailService: CarDetailService, private activatedRoute : ActivatedRoute, private router : Router)
  {
  }
  ngAfterViewInit(): void {
    this.showFile(this.item.fileId);
  }

  showFile(fileId:number){
    if(fileId){
    this.imageViewerComponent.showFile(fileId);
  }}

  redirectToCarInfo(): void {
    // Butona tıklandığında "Car Info" component'e yönlendirme yapılıyor
    this.router.navigate(['/car-info/'+this.item.carId]); // "/car-info" route'unun tanımlı olması gerekiyor
  }
}
