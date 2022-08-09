import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild("output") output: ElementRef;
  myArr = Array(62);
  item: number = 0;
  arrayValue: number;
  currentArray = [];
  arrayItem: any;

  mapSelect: any = true;
  everySelect: any = false;
  someSelect: any = false;

  constructor() { }

  ngOnInit(): void {
    this.generateArr();
  }

  generateArr() {
    this.currentArray = [];
    setTimeout(() => {
      this.getArrValues();
      this.refreshBackground();
    }, 200);

  }

  getArrValues() {
    let elements = Array.from(document.getElementsByClassName('array_element'));
    for (let i = 0; i < elements.length; i++) {
      let element: any = elements[i]
      this.arrayValue = Math.floor(Math.random() * 270);
      this.currentArray.push(this.arrayValue);
      element.style.height = this.getheight();
    }
  }

  getheight() {
    return this.arrayValue + `px`
  }

  selectMethod(method: any) {
    if (method == 'every') {
      this.everySelect = true;
      this.mapSelect = false;
      this.someSelect = false;
    }
    if (method == 'map') {
      this.everySelect = false;
      this.mapSelect = true;
      this.someSelect = false;
    }
    if (method == 'some') {
      this.everySelect = false;
      this.mapSelect = false;
      this.someSelect = true;
    }
  }

  visualize() {
    let elements = Array.from(document.getElementsByClassName('array_element'));
    elements.forEach((element: any) => {
      element.style.background = 'linear-gradient(#11998e, #38ef7d)'
    })
    this.item = 0;
    this.animate(elements);
  }

  animate(elements: any) {
    if (this.item == 62) {
      this.showOutput();
      return
    }
    let arrElement = elements[this.item];
    arrElement.style.background = `#cc91ca`;
    this.item++;
    setTimeout(() => {
      this.animate(elements);
    }, 30)
  }

  showOutput() {
    this.output.nativeElement.innerHTML = '';
    if (this.mapSelect) {
      this.output.nativeElement.innerHTML = this.mapFunction();
    }
    if (this.everySelect) {
      this.output.nativeElement.innerHTML = this.everyFunction();
    }
    if (this.someSelect) {
      this.output.nativeElement.innerHTML = this.someFunction();
    }
  }

  mapFunction() {
    return this.currentArray.map(element => element + ` hi`)
  }

  everyFunction() {
    return this.currentArray.every(element => element > 20)
  }

  someFunction() {
    return this.currentArray.some(element => element > 20)
  }


  refreshBackground() {
    this.item = 0;
    let elements: any = Array.from(document.getElementsByClassName('array_element'));
    elements.forEach((element: any) => {
      element.style.background = 'linear-gradient(#11998e, #38ef7d)'
    })
  }

}


