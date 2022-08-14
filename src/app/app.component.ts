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
  openOverlay = false;
  elementFound = false;
  currentArrayIndex: number = 0;
  sortedItem: number = 0;
  arrayValue: number;
  currentArray = [];
  reverseCurrentArray = [];
  reverseCurrentArrayIndex: number = 61;
  arrayItem: any;
  sortPosI = 0;
  sortPosJ: any;
  findElement: number = Math.floor(Math.random() * 60);

  methods = {
    mapSelect: false,
    everySelect: false,
    someSelect: false,
    filterSelect: false,
    sortSelect: true,
    findSelect: false,
    findIndexSelect: false,
    includesSelect: false,
    reverseSelect: false
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
    this.openMethods();
    for (let key in this.methods) {
      this.methods[key] = false;
      this.methods[index] = true;
    }
  }

  getElements() {
    return Array.from(document.getElementsByClassName('array_element'));
  }

  visualize() {
    this.output.nativeElement.innerHTML = '';
    let elements = this.getElements();
    elements.forEach((element: any) => {
      element.style.background = '';
      element.style.background = 'linear-gradient(#9a9a04, #e0dd00);'
    })
    this.currentArrayIndex = 0;
    this.animate(elements);
  }

  animate(elements: any) {
    let arrElement = elements[this.currentArrayIndex];
    if (this.methods.reverseSelect) {
      this.reverseArray();
      this.animateReverseArray(elements);
      return
    }
    if (this.methods.sortSelect) {
      this.insertionSort(elements);
    } else {
      if (this.currentArrayIndex == 62) {
        this.showOutput();
        return
      }
      if (!this.elementFound) {
        arrElement.style.background = `#cc91ca`;
      }
      this.checkSelectedMethod(arrElement);
      this.currentArrayIndex++;
      this.animateSpeed(elements, 20)
    }
  }

  animateSpeed(elements: any, speed: number) {
    setTimeout(() => {
      this.animate(elements);
    }, speed)
  }

  checkSelectedMethod(arrElement: any) {
    if (this.methods.filterSelect) {
      this.checkMatchingItems(arrElement);
    }
    if (this.methods.findSelect) {
      this.findSameElement(arrElement);
    }
    if (this.methods.findIndexSelect) {
      this.findIndexOfElement(arrElement);
    }
    if (this.methods.includesSelect) {
      this.findSameElement(arrElement);
    }

  }

  findIndexOfElement(arrElement: any) {
    const element = this.currentArray.findIndex(element => element == this.currentArray[this.findElement])
    if (this.currentArrayIndex == element && !this.elementFound) {
      arrElement.style.background = `red`;
      this.elementFound = true;
      this.showOutput();
    }
  }

  findSameElement(arrElement: any) {
    const element = this.currentArray.find(element => element == this.currentArray[this.findElement])
    if (this.currentArray[this.currentArrayIndex] == element && !this.elementFound) {
      arrElement.style.background = `red`;
      this.elementFound = true;
      this.showOutput();
    }
  }

  animateReverseArray(elements: any) {
    if (this.currentArrayIndex == 31) {
      this.reverseAnimationEnd();
      return
    }

    this.startReverseAnimation(elements);
      this.currentArrayIndex++;
      this.reverseCurrentArrayIndex--;
  
    setTimeout(() => {
      this.animateReverseArray(elements);
    }, 100)
  }

  reverseAnimationEnd() {
    this.currentArrayIndex = 0;
    this.reverseCurrentArrayIndex = 61;
    this.showOutput();
  }

  startReverseAnimation(elements: any) {
    elements[this.currentArrayIndex].style.background = '#cc91ca';
    elements[this.currentArrayIndex].style.height = this.currentArray[this.reverseCurrentArrayIndex] + `px`;
    elements[this.reverseCurrentArrayIndex].style.background = '#cc91ca';
    elements[this.reverseCurrentArrayIndex].style.height = this.currentArray[this.currentArrayIndex] + `px`;
  }

  async reverseArray() {
    for (let i = this.currentArray.length - 1; i >= 0; i--) {
      this.reverseCurrentArray.push(this.currentArray[i]);
    }
  }

  checkMatchingItems(arrElement: any) {
    if (this.currentArray[this.currentArrayIndex] > 200) {
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
      let filtered = this.filterFunction();
      this.output.nativeElement.innerHTML = filtered.join(', '); 
    }
    if (this.methods.sortSelect) {
      this.output.nativeElement.innerHTML = this.currentArray.join(', ');
    }
    if (this.methods.findSelect) {
      this.output.nativeElement.innerHTML = this.findFunction();
    }
    if (this.methods.findIndexSelect) {
      this.output.nativeElement.innerHTML = this.findIndexFunction();
    }
    if (this.methods.includesSelect) {
      this.output.nativeElement.innerHTML = this.includesFunction();
    }
    if (this.methods.reverseSelect) {
      this.reverseFunction();
      this.output.nativeElement.innerHTML = this.currentArray.join(', '); 
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

  includesFunction() {
    return this.currentArray.includes(this.currentArray[this.findElement])
  }

  reverseFunction() {
    return this.currentArray.reverse();
  }

  refreshBackground() {
    this.currentArrayIndex = 0;
    this.elementFound = false;
    let elements: any = Array.from(document.getElementsByClassName('array_element'));
    elements.forEach((element: any) => {
      element.style.background = '';
      element.style.background = 'linear-gradient(#9a9a04, #e0dd00);'
    })
  }

  insertionSort(elements: any) {
    if (this.sortPosI == 62) {
      this.sortPosI = 0;
      this.showOutput();
      return
    } else {
      elements[this.sortPosI].style.background = '#cc91ca'
      if (this.sortPosI < this.currentArray.length) {
        this.sortPosI++
        let current = this.currentArray[this.sortPosI];
        this.sortPosJ = this.sortPosI - 1;
        while (this.sortPosJ > -1 && (current < this.currentArray[this.sortPosJ])) {
          this.currentArray[this.sortPosJ + 1] = this.currentArray[this.sortPosJ];
          this.sortPosJ--;
        }
        this.currentArray[this.sortPosJ + 1] = current;
      }

      setTimeout(() => {
        this.insertionSort(elements)
      }, 100)

      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.style.height = this.getheight(i);
      }
    }
  }

  openMethods() {
    this.showMethodButtons = !this.showMethodButtons;
  }

}


