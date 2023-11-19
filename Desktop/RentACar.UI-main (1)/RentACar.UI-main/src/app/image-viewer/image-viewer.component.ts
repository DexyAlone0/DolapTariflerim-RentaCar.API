import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { FileService } from '../services/file-services';
import { Observable } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {
  imageBlob: Blob | null = null;
  @ViewChild('imageElement') imageElement: ElementRef;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    
  }

  showFile(fileId : number){
    if (fileId) {
      this.fileService.getFileById(fileId).subscribe({
        next: (data: Blob) => {
          this.imageBlob = data;
          this.displayImage();
        },
        error: (error) => {
          console.error('API isteği başarısız:', error);
        },
        complete: () => {
          // İşlem tamamlandığında yapılacak işlemler (isteğe bağlı)
        }
      });
    }
  }

  displayImage(): void {
    if (this.imageBlob !== null) {
      const imageUrl = URL.createObjectURL(this.imageBlob);
      this.imageElement.nativeElement.src = imageUrl;
    }
  }
}
