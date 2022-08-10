import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visualarray';

  @ViewChild("output") output: ElementRef;
  myArr = Array(62);
  showMethodButtons = false;
  item: number = 0;
  sortedItem: number = 0;
  arrayValue: number;
  currentArray = [];
  arrayItem: any;
  findElement: number = Math.floor(Math.random() * 60);

  methods = {
    mapSelect: false,
    everySelect: false,
    someSelect: false,
    filterSelect: true,
    sortSelect: false,
    findSelect: false,
    findIndexSelect: false
  }

  constructor() { }

  ngOnInit(): void {
    this.generateArr();
  }

  getValue() {
    let value = this.currentArray[this.findElement]
    return value
  }

  generateArr() {
    this.currentArray = [];
    this.findElement = Math.floor(Math.random() * 60);
    setTimeout(() => {
      this.getArrValues();
      this.refreshBackground();
    }, 50);
  }

  getArrValues() {
    this.output.nativeElement.innerHTML = '';
    let elements = Array.from(document.getElementsByClassName('array_element'));
    for (let i = 0; i < elements.length; i++) {
      let element: any = elements[i]
      this.arrayValue = Math.floor(Math.random() * 270);
      this.currentArray.push(this.arrayValue);
      element.style.height = this.getheight(i);
    }
  }

  getheight(i: number) {
    return this.currentArray[i] + `px`
  }

  selectMethod(index: string) {
    this.generateArr();
    this. openMethods();
    for (let key in this.methods) {
      this.methods[key] = false;
      this.methods[index] = true;
    }
  }

  visualize() {
    this.output.nativeElement.innerHTML = '';
    let elements = Array.from(document.getElementsByClassName('array_element'));
    elements.forEach((element: any) => {
      element.style.background = '';
      element.style.background = 'linear-gradient(#9a9a04, #e0dd00);'
    })
    this.item = 0;
    this.animate(elements);
  }



  animate(elements: any) {
    if (this.item == 62) {
      if (this.methods.sortSelect) {
        this.insertionSort();
        this.animateSortedArray(elements);
      }
      this.showOutput();
      return
    }
    let arrElement = elements[this.item];
    arrElement.style.background = `#cc91ca`;

    if (this.methods.filterSelect) {
      this.checkMatchingItems(arrElement);
    }
    if (this.methods.findSelect) {
      const element = this.currentArray.find(element => element == this.currentArray[this.findElement])
      if (this.currentArray[this.item] == element) {
        arrElement.style.background = `red`;
        this.showOutput();
        return
      }
    }
    if (this.methods.findIndexSelect) {
      const element = this.currentArray.findIndex(element => element == this.currentArray[this.findElement])
      if (this.item == element) {
        arrElement.style.background = `red`;
        this.showOutput();
        return
      }
    }
    this.item++;
    setTimeout(() => {
      this.animate(elements);
    }, 20)
  }



  animateSortedArray(elements: any) {
    if (this.sortedItem == 62) {
      this.sortedItem = 0;
      return
    }
    let arrElement = elements[this.sortedItem];
    console.log(arrElement)
    arrElement.style.background = `linear-gradient(#9a9a04, #e0dd00);`;
    arrElement.style.height = this.getheight(this.sortedItem);
    this.sortedItem++;
    setTimeout(() => {
      this.animateSortedArray(elements);
    }, 20)
  }

  checkMatchingItems(arrElement: any) {
    if (this.currentArray[this.item] > 200) {
      arrElement.style.background = `red`;
    }
  }

  showOutput() {
    this.output.nativeElement.innerHTML = '';
    if (this.methods.mapSelect) {
      this.output.nativeElement.innerHTML = this.mapFunction();
    }
    if (this.methods.everySelect) {
      this.output.nativeElement.innerHTML = this.everyFunction();
    }
    if (this.methods.someSelect) {
      this.output.nativeElement.innerHTML = this.someFunction();
    }
    if (this.methods.filterSelect) {
      this.output.nativeElement.innerHTML = this.filterFunction();
    }
    if (this.methods.sortSelect) {
      this.sortFunction();
      this.output.nativeElement.innerHTML = this.currentArray.join(', ');
    }
    if (this.methods.findSelect) {
      this.output.nativeElement.innerHTML = this.findFunction();
    }
    if (this.methods.findIndexSelect) {
      this.output.nativeElement.innerHTML = this.findIndexFunction();
    }
  }

  mapFunction() {
    return this.currentArray.map(element => element + ` hi`)
  }

  everyFunction() {
    return this.currentArray.every(element => element > 20)
  }

  someFunction() {
    return this.currentArray.some(element => element > 100)
  }

  filterFunction() {
    return this.currentArray.filter(element => element > 200)
  }

  sortFunction() {
    return this.currentArray.sort((a, b) => a > b ? 1 : -1)
  }

  findFunction() {
    return this.currentArray.find(element => element == this.currentArray[this.findElement])
  }

  findIndexFunction() {
    return this.currentArray.findIndex(element => element == this.currentArray[this.findElement])
  }



  refreshBackground() {
    this.item = 0;
    let elements: any = Array.from(document.getElementsByClassName('array_element'));
    elements.forEach((element: any) => {
      element.style.background = '';
      element.style.background = 'linear-gradient(#9a9a04, #e0dd00);'
    })
  }

  async insertionSort() {
    for (let i = 1; i < this.currentArray.length; i++) {
      // Start comparing current element with every element before it
      for (let j = i - 1; j > -1; j--) {

        // Swap elements as required
        if (this.currentArray[j + 1] < this.currentArray[j]) {
          [this.currentArray[j + 1], this.currentArray[j]] = [this.currentArray[j], this.currentArray[j + 1]];
        }
      }
    }
  }

  openMethods() {
    this.showMethodButtons = !this.showMethodButtons;
  }

}


