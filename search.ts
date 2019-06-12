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
    return null;
  }
}