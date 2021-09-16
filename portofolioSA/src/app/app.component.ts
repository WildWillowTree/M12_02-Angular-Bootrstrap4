import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit(){
    this.titleService.setTitle('Portofile template');
    this.meta.updateTag({name: 'description', content: 'White template for personal portofolio'})
  }
}
