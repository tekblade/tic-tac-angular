import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { SinglePoolComponent } from './single-pool/single-pool.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    SinglePoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
