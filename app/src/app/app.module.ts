import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageBlockComponent} from './components/message-block/message-block.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    MessageBlockComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
