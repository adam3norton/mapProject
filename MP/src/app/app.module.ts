import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmMapComponent } from './agm-map/agm-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AgmMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCfzqOKwOKa5OpdbgrBgHYyzp9EheZ95k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
