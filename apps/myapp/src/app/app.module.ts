import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MylibModule } from '@migration-tests-old/mylib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MylibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
