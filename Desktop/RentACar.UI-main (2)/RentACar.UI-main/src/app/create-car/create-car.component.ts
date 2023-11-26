import { Component } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { BrandResponse } from '../response/brand-response';
import { ModelResponse } from '../response/model-response';
import { CarDetailService } from '../services/car-detail.service';
import { ActivatedRoute } from '@angular/router';
import { CreateCarService } from '../services/create-car.service';
import { CarDetailResponse } from '../response/car-detail-response';
import { CreateCarRequest } from '../request/create-car.request';



@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  carCreateRequest : CreateCarRequest= new CreateCarRequest();
  brands: BrandResponse[] | undefined;
  models: ModelResponse[] | undefined = [];
  carId : number=0;
  modelSelect : any;
  brandSelect : any;
  constructor(private createCarService: CreateCarService)
  {

  }
  //Marka seçildiğinde modelleri getirmesi için yazılan method şuanda kullanılmıyor.
  brandChange(){

    this.models = undefined;
    this.createCarService.getModelByBrandId(this.brandSelect).subscribe({
      next: (data: ModelResponse[]) => {
        // next
        this.models = data;

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
  saveCar(){
    this.createCarService.carCreate(this.carCreateRequest).subscribe({
      next: () => {
        // next
        console.log('başarılı');
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
      }
    });
    console.log('bitti');

  }

  onFileSelected(event: any) {
    this.carCreateRequest.file = event.target.files[0];
  }


  ngOnInit() {
    this.createCarService.getAllBrand().subscribe({
      next: (data: BrandResponse[]) => {
        // next
        this.brands = data;
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


