import { Component, OnInit } from '@angular/core';
import { CarDetailService } from "../services/car-detail.service"
import { CarDetailResponse } from '../response/car-detail-response';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  manuelIsChecked : boolean = true;
  otomatikIsChecked : boolean = true;
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
  gearTypeFilter(){

    //manuel ve otomatik işaretliyse hepsi gelecek
    //ikisi de işaretli değilse hepsi gelecek
    //manueli işaretlediysem sadece manueli göster
    //otomatiği işaretlediysem sadece otomatiği getir

    if (this.manuelIsChecked && this.otomatikIsChecked) {
      this.items = this.allData;
    }
    else if ( !this.manuelIsChecked && !this.otomatikIsChecked) {
      this.items = this.allData;
    }
    else if (this.manuelIsChecked){
      this.items = this.items?.filter(x=>x.gearTypeName == "Manuel")
    }
    else if (this.otomatikIsChecked){
      this.items = this.items?.filter(x => x.gearTypeName == "Otomatik")
    }


  }
}
