import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { CarInfoResponse } from '../response/car-info-response';
import { CarDetailService } from '../services/car-detail.service';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from '../services/model.service';
import { CarModelResponse } from '../response/car-model-response';
import { CarDetailResponse } from '../response/car-detail-response';
import { CreateCarService } from '../services/create-car.service';
import { ModelResponse } from '../response/model-response';
import { UpdateCarRequest } from '../request/update-car.request';




@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  @ViewChild(ImageViewerComponent) imageViewerComponent: ImageViewerComponent;
  @Input() item: CarInfoResponse = new CarInfoResponse();
  carId: number;
  model: CarModelResponse | undefined;
  models: ModelResponse[] | undefined;
  modelId : number;


  constructor(private carDetailService: CarDetailService, private modelService: ModelService, private createCarService: CreateCarService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(p => {
      this.carId = p["carId"]
    })
  }

  ngOnInit() {

    this.createCarService.getAllModel().subscribe({
      next: (data: ModelResponse[]) => {
        this.models = data;
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
        // complete
      }
    })

    this.carDetailService.getItemsById(this.carId).subscribe({
      next: (data: CarDetailResponse) => {
        // next
        this.item = data;
        this.imageViewerComponent.showFile(this.item.fileId);
        this.getModel(data.modelId)
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
  onChangeModel(){
    this.getModel(this.item.modelId);
  }
  updateCar()
  {
    const request : UpdateCarRequest={
      id : this.item.carId,
      year : this.item.year,
      hesAirConditioning : this.item.hesAirConditioning,
      modelId : this.item.modelId,

    };
    console.log(request);
     this.carDetailService.updateCar(request).subscribe({
      next : (data : any) => {
        alert('Başarılı');
      },
      error: (error) => {
        console.error('Model İsteği Başarısız', error);
      }
     });
  }
  getModel(modelId: number) {
    this.modelService.getModel(modelId).subscribe({
      next: (data: CarModelResponse) => {
        this.model = data;
      },
      error: (error) => {
        console.error('Model İsteği Başarısız', error);
      },
      complete: () => {
        // complete
      }
    })
  }


}


