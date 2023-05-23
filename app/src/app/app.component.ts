import {Component, Input} from '@angular/core';
import { InterlineComponent} from "./components/interline/interline.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  title = 'app';
  public counter: number[] = [1, 3];
}
