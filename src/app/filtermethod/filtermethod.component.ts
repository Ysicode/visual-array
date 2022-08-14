import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtermethod',
  templateUrl: './filtermethod.component.html',
  styleUrls: ['./filtermethod.component.scss']
})
export class FiltermethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.alex();
  }

alex() {
  let names = [ 'Marie', 'Julia', 'Kevin', 'Marcel', 'Andy' ];
  let filtered = names.filter(element => element.startsWith('M'));
  console.log(filtered);

  //Output = ['Marie', 'Marcel']
}

}
