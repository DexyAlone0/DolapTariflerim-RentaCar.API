import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FridgeResponse } from '../response/fridge-response';
import { FridgeService } from '../services/fridge.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { FoodResponse } from '../response/food-response';



@Component({
  selector: 'app-fridge-products',
  templateUrl: './fridge-products.component.html',
  styleUrls: ['./fridge-products.component.css']
})
export class FridgeProductsComponent implements OnInit {
  @Input() item: FoodResponse | any;
  @ViewChild(ImageViewerComponent) imageViewerComponent!: ImageViewerComponent;

  product: string = '';
  products : FridgeResponse[] = [];
  private subscription: Subscription | undefined;

  constructor(private productService: FridgeService) { }


  ngAfterViewInit(): void {
    this.showFile(this.item.fileId);
  }

  showFile(fileId: number): void {
    if (fileId) {
      this.imageViewerComponent.showFile(fileId);
    } else {
      console.error('fileId tanımlı değil veya geçerli bir değere sahip değil!');
    }
  }

  createProduct() {
    this.subscription = this.productService.createProduct(this.product)
      .subscribe({
        next: (response) => {
          console.log('Ürün oluşturuldu:', response);
          // İsteğe göre işlemler yapabilirsiniz
        },
        error: (error) => {
          console.error('Ürün oluşturulurken hata oluştu:', error);
          // İsteğe göre hata işlemleri yapabilirsiniz
        },
        complete: () => {
          console.log('İstek tamamlandı.');
          // İsteğe göre işlemler yapabilirsiniz
        }
      });
  }

  ngOnDestroy() {
    // Component yok edildiğinde subscription'ı temizleme
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

    ngOnInit(): void {
      this.productService.getProductsAll().subscribe((data: any) => {
        this.products = data;
        console.log(this.products);
      });
    }

    deleteProduct(productId: number): void {
      this.productService.deleteProduct(productId).subscribe({
      next: () => {
        // Başarıyla silindiğinde yapılacak işlemler
        console.log(`Product with ID ${productId} deleted successfully.`);
        // Ürünleri tekrar yükleme
        this.ngOnInit();
      },
      error: (error) => {
        // Silme işlemi başarısız olduğunda yapılacak işlemler
        console.error(`Error deleting product with ID ${productId}:`, error);
        // Hata nesnesini konsola yazdır
      }
    });
  }
}
