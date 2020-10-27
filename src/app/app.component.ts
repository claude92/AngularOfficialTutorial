import { DoCheck, ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
interface Item {
  id: number,
  name: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  @ViewChild('myDivWith') theDivWith: ElementRef;
  @ViewChild('myDivWithout') theDivWithout: ElementRef;
  changeDetection: string = '';
  title = 'my-angular-app';
  items: Item[] = [
    { id: 1, name: 'Paolo' },
    { id: 2, name: 'Marco' }
  ]
  trackByItems(index: number, item: Item): number { return item.id };
  resetItems() {
    this.items[0] = { id: 1, name: "Paolo" };
    this.items[1] = { id: 2, name: "Marco" }
  }
  changeIds() {
    this.items[0].id = 3;
    this.items[1].id = 4;
  }
  add() {
    this.items = [
      { id: 1, name: 'Paolo' },
      { id: 2, name: 'Marco' },
      { id: 3, name: "Luca" }
    ]
  }
  clearCounts() {
    this.items = [
      { id: 1, name: 'Paolo' },
      { id: 2, name: 'Marco' }
    ]
    this.changeDetection = "";
  }
  ngDoCheck() {
    this.changeDetection += " changed";
  }
}
