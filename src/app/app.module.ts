import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // add this

import { AppComponent } from './app.component';
import { StuffyDisplayComponent } from './stuffy-display/stuffy-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StuffyDisplayComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule // add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

