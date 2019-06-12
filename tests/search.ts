import { Sorter } from './../sort';
import { expect } from 'chai';
import { Search } from '../search';


let tdd1 = [-2, -5, 78, 3, -10, 9, 15, 22];
let tdd2 = [2, 5, 100, 500, 22, 77, 55, 332, 565, 11, 56, 99, 44, 43, 456];
let tdd3 = [45, 422, 33, 355, 6, 12, 7, 99, 5576, 2345, 5678, 34523452, 4567342, 56783, 5683, 467346584, 678346, 54673, 35456, 4456, 83, 81, 9494];


describe('Search', function () {
  it('Linear 1', function () {
    let t1 = new Search(new Sorter(tdd1).bubbleSort());
    expect(t1.interpolationSearch(3)).to.equal(3);
  });
  it('Linear 2', function () {
    let t2 = new Search(new Sorter(tdd2).bubbleSort());
    expect(t2.interpolationSearch(332)).to.equal(11);
  });
  it('Linear 3', function () {
    let t3 = new Search(new Sorter(tdd3).bubbleSort());
    expect(t3.interpolationSearch(6)).to.equal(0);
  });
});