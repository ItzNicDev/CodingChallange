import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageBlockComponent} from './components/message-block/message-block.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataService} from "./services/data.service";
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportComponent } from './pages/report/report.component';
import {FormsModule} from "@angular/forms";
import { TestComponent} from "./pages/test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    MessageBlockComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ReportComponent,
    TestComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
