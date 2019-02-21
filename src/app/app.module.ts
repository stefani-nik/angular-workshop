import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumsTableComponent } from './components/home/albums-table/albums-table.component';
import { ImagesTableComponent } from './components/home/images-table/images-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsTableComponent,
    ImagesTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }