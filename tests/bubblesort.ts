import { expect } from 'chai';
import { Sorter } from '../sort';

let tdd1 = [-2, -5, 78, 3, -10, 9, 15, 22];
let tdd2 = [2, 5, 100, 500, 22, 77, 55, 332, 565, 11, 56, 99, 44, 43, 456];
let tdd3 = [45, 422, 33, 355, 6, 12, 7, 99, 5576, 2345, 5678, 34523452, 4567342, 56783, 5683, 467346584, 678346, 54673, 35456, 4456, 83, 81, 9494];


describe('Sorter', function () {
  it('Insetion Sort 1', function () {
    let t1 = new Sorter(tdd1);
    expect(t1.mergeSort(tdd1)).to.eql([-10, -5, -2, 3, 9, 15, 22, 78]);
  });
  it('Insetion Sort 2', function () {
    let t2 = new Sorter(tdd2);
    expect(t2.mergeSort(tdd2)).to.eql([2, 5, 11, 22, 43, 44, 55, 56, 77, 99, 100, 332, 456, 500, 565]);
  });
  it('Insetion Sort 3', function () {
    let t3 = new Sorter(tdd3);
    expect(t3.mergeSort(tdd3)).to.eql([6,
      7,12,33,45,81,83,99,355,422,2345,4456,5576,5678,5683,9494,35456,54673,56783,678346,4567342,34523452,467346584]);
  });
});