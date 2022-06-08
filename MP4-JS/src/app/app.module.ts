import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JsMapComponent } from './js-map/js-map.component';
import { pinService } from 'src/shared/pinService.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PinEditComponent } from './pin-edit/pin-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    JsMapComponent,
    PinEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [pinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
