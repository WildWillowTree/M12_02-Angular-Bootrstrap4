import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortofolioModule } from '../portofolio/portofolio.module';
import { ContactModule } from '../contact/contact.module';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortofolioModule,
    ContactModule,
    RegisterFormComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
