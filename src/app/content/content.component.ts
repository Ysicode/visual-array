import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('array') myarray: ElementRef | any;
  arrayItems: number = 62;
  myArr = Array(this.arrayItems);


  arr = [];

  arrayItem: any;
  constructor() { }

  ngOnInit(): void {
    this.generateArr();
  }

  generateArr() {
      return Math.floor(Math.random() * 270);
  }

  visualize() {
    return this.arr.map(element => element + 10)
  }

}
