export class Sorter {
  array : number[];
  constructor(array: number[]) {
    this.array = array;
  }
  bubbleSort () {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] > this.array[i + 1]) {
          let tmp = this.array[i];
          this.array[i] = this.array[i + 1];
          this.array[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);
    return this.array;
  }

  selectionSort() {
    for(let i = 0; i < this.array.length; i ++) {
      let min = i;
      for(let j = i + 1; j < this.array.length; j++) {
        if(this.array[min] > this.array[j]) min = j;
      }
      if(min !== i) [this.array[i], this.array[min]] = [this.array[min], this.array[i]];
    }
    return this.array;
  }

  insertionSort() {
    const len = this.array.length;
    for (let i = 0; i < len; i++) {
      let el = this.array[i];
      let j:number;

      for (j = i - 1; j >= 0 && this.array[j] > el; j--) {
        this.array[j + 1] = this.array[j];
      }
      this.array[j + 1] = el;
    }
    return this.array;
  }
  mergeSort(arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left =arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return this.merge(
      this.mergeSort(left),
      this.mergeSort(right)
    )
  }

  merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
}

