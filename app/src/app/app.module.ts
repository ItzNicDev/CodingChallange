import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageBlockComponent } from './components/message-block/message-block.component';
import { InterlineComponent } from './components/interline/interline.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBlockComponent,
    InterlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
