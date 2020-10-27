import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }
  clickMessage = '';
  values = '';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  ngOnInit(): void {
  }
  onClickMe() {
    this.clickMessage = ' You are my hero!';
  }
  /**
   * event knows more than you want
   */
  // onKey(event:any){
  //   this.values+=event.key+' | ';
  // }
  onKey(event: KeyboardEvent) {
    this.values += (event.target as HTMLInputElement).value + ' | '
  }
  onKeyUp(value: string) {
    this.values += value + ' | ';
  }
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
