import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmMapComponent } from './agm-map/agm-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmMapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCfzqOKwOKa5OpdbgrBgHYyzp9EheZ95k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
