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

  numberViewSelect = false;
  showHelp = false;

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

  /** 
   * This function is used to set a random value in the condition of the function
   *  
   * @returns - a value of the current array on a random index
   */
  getValue() {
    let value = this.currentArray[this.findElement]
    return value
  }

  /**
   * This function is used to generate a random array and a random value for the variable findElement
   */
  generateArr() {
    this.currentArray = [];
    this.findElement = Math.floor(Math.random() * 60);
    setTimeout(() => {
      this.getArrValues();
      this.refreshBackground();
    }, 50);
  }

  /**
   * This function is used to set the height of each array elements random value
   * Each value gets pushed in a current array
   */
  getArrValues() {
    this.output.nativeElement.innerHTML = '';
    let elements = this.getElements();
    for (let i = 0; i < elements.length; i++) {
      let element: any = elements[i]
      this.arrayValue = Math.floor(Math.random() * 270);
      this.currentArray.push(this.arrayValue);
      if (this.numberViewSelect) {
        element.innerHTML = this.currentArray[i] + ',';
        element.style.height = '20px';
      } else {
        element.innerHTML = '';
        element.style.height = this.getheight(i);
      }
    }
  }

  /**
   * This function is used to set the height of the animated array element to its value
   * 
   * @param i - index at the current array
   * @returns - a string to set the height in px
   */
  getheight(i: number) {
    return this.currentArray[i] + `px`
  }

  /**
   * This function is used to set all methods variables false and the one which is selected true
   * 
   * @param index - a string with the methods variable
   */
  selectMethod(index: string) {
    this.generateArr();
    this.openMethods();
    for (let key in this.methods) {
      this.methods[key] = false;
      this.methods[index] = true;
    }
  }

  /**
   * This function is used to get all html array elements by classname
   * 
   * @returns - an array with the elements of the same classname
   */
  getElements() {
    return Array.from(document.getElementsByClassName('array_element'));
  }

  /**
   * This function is used start the animation and refresh the background color 
   */
  visualize() {
    this.output.nativeElement.innerHTML = '';
    let elements = this.getElements();
    elements.forEach((element: any) => {
      element.style.background = '';
      element.style.background = 'linear-gradient(#9a9a04, #e0dd00);'
      element.style.color = '#9a9a04';
    })
    this.currentArrayIndex = 0;
    this.animate(elements);
  }

  /**
   * This function is used to animate the array depending on which method is selected.
   * 
   * @param elements - an array of all array html elements by classname
   * @returns - return from the function
   */
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
        arrElement.style.color = `#cc91ca`;
      }
      this.checkSelectedMethod(arrElement);
      this.currentArrayIndex++;
      this.animateSpeed(elements, 20)
    }
  }

  /**
   * This function is used to restart the animate function after a timeout
   * 
   * @param elements - an array of all array html elements by classname
   * @param speed - a number which sets the timout length to restart the animate function
   */
  animateSpeed(elements: any, speed: number) {
    setTimeout(() => {
      this.animate(elements);
    }, speed)
  }

  /**
   * This function is used to check which method is selected to call different functions
   * 
   * @param arrElement - the current element of the array at index variable currentArrayIndex
   */
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

  /**
   * This function is used to find the Index of the provided element in the array and color the background red
   * If the element is found, the animation stops by setting elementFound true
   * 
   * @param arrElement - the current element of the array at index variable currentArrayIndex
   */
  findIndexOfElement(arrElement: any) {
    const element = this.currentArray.findIndex(element => element == this.currentArray[this.findElement])
    if (this.currentArrayIndex == element && !this.elementFound) {
      arrElement.style.background = `red`;
      arrElement.style.color = `red`;
      this.elementFound = true;
      this.showOutput();
    }
  }

  /**
   * This function is used to find the provided element in the current array and color the background red
   * If the element is found, the animation stops by setting elementFound true
   * 
   * @param arrElement - the current element of the array at index variable currentArrayIndex
   */
  findSameElement(arrElement: any) {
    const element = this.currentArray.find(element => element == this.currentArray[this.findElement])
    if (this.currentArray[this.currentArrayIndex] == element && !this.elementFound) {
      arrElement.style.background = `red`;
      arrElement.style.color = `red`;
      this.elementFound = true;
      this.showOutput();
    }
  }

  /**
   * This function is used to animate the reverse method 
   * 
   * @param elements - an array of all array html elements by classname
   * @returns - return from the function
   */
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

  /**
   * This function is used to stop the reverse animation
   */
  reverseAnimationEnd() {
    this.currentArrayIndex = 0;
    this.reverseCurrentArrayIndex = 61;
    this.showOutput();
  }

  /**
   * This function is used to style the background and height of each position in the reversearray
   * 
   * @param elements - an array of all array html elements by classname
   */
  startReverseAnimation(elements: any) {
    elements[this.currentArrayIndex].style.background = '#cc91ca';
    elements[this.currentArrayIndex].style.color = '#cc91ca';
    elements[this.reverseCurrentArrayIndex].style.background = '#cc91ca';
    elements[this.reverseCurrentArrayIndex].style.color = '#cc91ca';
    elements[this.currentArrayIndex].innerHTML = this.currentArray[this.reverseCurrentArrayIndex];
    elements[this.reverseCurrentArrayIndex].innerHTML= this.currentArray[this.currentArrayIndex];
    if (!this.numberViewSelect) {
      elements[this.currentArrayIndex].style.height = this.currentArray[this.reverseCurrentArrayIndex] + `px`;
      elements[this.reverseCurrentArrayIndex].style.height = this.currentArray[this.currentArrayIndex] + `px`;
    }
  }

  /**
   * This function is used to push the values reverse in a new array to do an animation
   * 
   */
  async reverseArray() {
    for (let i = this.currentArray.length - 1; i >= 0; i--) {
      this.reverseCurrentArray.push(this.currentArray[i]);
    }
  }

  /**
   * This function is used to color all matching elements of the array in the filter method
   * 
   * @param arrElement - the current element of the array at index variable currentArrayIndex
   */
  checkMatchingItems(arrElement: any) {
    if (this.currentArray[this.currentArrayIndex] > 200) {
      arrElement.style.background = `red`;
      arrElement.style.color = `red`;
    }
  }

  /**
   * This function is used to show the output of each function with its return 
   */
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

  /**
   * This function is used to map all elements and add hi to it
   * 
   * @returns - the map function 
   */
  mapFunction() {
    return this.currentArray.map(element => element + ` hi`)
  }

  /**
   * This function is used to check if every elements pass the condition
   * 
   * @returns - the every function
   */
  everyFunction() {
    return this.currentArray.every(element => element > 20)
  }

  /**
   * This function is used check if some elements pass the condition
   * 
   * @returns - the some function
   */
  someFunction() {
    return this.currentArray.some(element => element > 100)
  }

  /**
   * This function is used filter all elements that pass the provided condition
   * 
   * @returns - the filter function
   */
  filterFunction() {
    return this.currentArray.filter(element => element > 200)
  }

  /**
   * This function is used to sort all elements in ascend order
   * 
   * @returns - the sort function
   */
  sortFunction() {
    return this.currentArray.sort((a, b) => a > b ? 1 : -1)
  }

  /**
   * This function is used to find the element of the random generated value given in the condition
   * 
   * @returns - the find function
   */
  findFunction() {
    return this.currentArray.find(element => element == this.currentArray[this.findElement])
  }

  /**
   * 
   * @returns - the find the index of the random element which was generated and provided in the condition 
   */
  findIndexFunction() {
    return this.currentArray.findIndex(element => element == this.currentArray[this.findElement])
  }

  /**
   * This function is used to check if the array includes a randowm value
   * 
   * @returns - the include function
   */
  includesFunction() {
    return this.currentArray.includes(this.currentArray[this.findElement])
  }

  /**
   * This function is used to reverse the current array
   * 
   * @returns - the reverse function
   */
  reverseFunction() {
    return this.currentArray.reverse();
  }

  /**
   * This function is used to refresh the background to its default color
   */
  refreshBackground() {
    this.currentArrayIndex = 0;
    this.elementFound = false;
    let elements: any = this.getElements();
    elements.forEach((element: any) => {
      element.style.background = '';
      element.style.background = 'linear-gradient(#9a9a04, #e0dd00);'
      element.style.color = '#9a9a04'
    })
  }

  /**
   * This function is used to sort the current array with the insertion sort algorythm
   * To animate it in slow motion, instead of a for loop i used an if condition whith global variables
   * 
   * @param elements - an array of all array html elements by classname
   * @returns - return from the function
   */
  insertionSort(elements: any) {
    if (this.sortPosI == 62) {
      this.sortPosI = 0;
      this.showOutput();
      return
    } else {
      elements[this.sortPosI].style.background = '#cc91ca';
      elements[this.sortPosI].style.color = '#cc91ca';
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
      this.setNewValues(elements);
      setTimeout(() => {
        this.insertionSort(elements)
      }, 100)
    }
  }

  /**
   * This function is used to set the inner html and height to the new sorted value at
   * 
   * @param elements - an array of all array html elements by classname
   */
  setNewValues(elements: any) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      if (!this.numberViewSelect) {
        element.style.height = this.getheight(i);
      } else {
        element.innerHTML = this.currentArray[i];
      }
    }
  }

  /**
   * This function is used to open and close the method buttons
   */
  openMethods() {
    this.showMethodButtons = !this.showMethodButtons;
  }

  toggleHelp() {
  this.showHelp = ! this.showHelp;
  document.body.classList.toggle('noScroll');
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

}


