import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MimeModule } from 'ngx-mime';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MimeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
