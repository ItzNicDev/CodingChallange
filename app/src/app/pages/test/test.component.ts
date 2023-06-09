import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public text: string = "";

  public list: string[] = [""];
  public amount: any[] = []
  public counter: number = -1;

  ngOnInit() {

    // @ts-ignore
    this.list = JSON.parse(localStorage.getItem("[test] list"));
  }

  addList() {
    this.counter++
    this.amount.push(this.counter)
  }

  onKey(input: any, index: number) {
    this.list[index] = input;
    localStorage.setItem("[test] list", JSON.stringify(this.list));
    console.log(this.list)

  }

  protected readonly localStorage = localStorage;
  protected readonly JSON = JSON;
}
