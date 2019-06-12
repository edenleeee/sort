export class Search {
  array:number[];
  constructor(array: number[]) {
    this.array = array;
  }
  linearSearch(value:number) {
    for ( let i = 0 ; i < this.array.length; i ++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  binarySearch ( value: number ) {
    let start = 0
    let stop = this.array.length - 1
    let middle = Math.floor((start + stop) / 2)
  
    while (this.array[middle] !== value && start < stop) {
      if (value < this.array[middle]) {
        stop = middle - 1
      } else {
        start = middle + 1
      }
  
      middle = Math.floor((start + stop) / 2)
    }
    console.log(middle)
    return (this.array[middle] !== value) ? -1 : middle
  }

}