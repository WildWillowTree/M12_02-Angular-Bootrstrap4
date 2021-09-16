import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './@components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './@components/home/home.component';
import { AboutComponent } from './@components/about/about.component';
import { ServicesComponent } from './@components/services/services.component';
import { ContactComponent } from './@components/contact/contact.component';
import { WorksComponent } from './@components/works/works.component';
import { GalleryComponent } from './@widget/gallery/gallery.component';
import { PortofolioComponent } from './@components/portofolio/portofolio.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent, 
    WorksComponent, 
    GalleryComponent,
    PortofolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
