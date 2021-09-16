import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioComponent } from './portofolio.component';
import { GalleryComponent } from 'src/app/@widget/gallery/gallery.component';



@NgModule({
  declarations: [
    PortofolioComponent
  ],
  imports: [
    CommonModule,
    GalleryComponent 
  ],
  exports: [
    PortofolioComponent
  ]
})
export class PortofolioModule { }
