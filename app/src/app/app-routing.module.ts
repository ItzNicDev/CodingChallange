import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from "./app.component";
import {MessageBlockComponent} from "./components/message-block/message-block.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [{path: 'home', component: HomeComponent}, { path: '', component: LoginComponent} , { path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
