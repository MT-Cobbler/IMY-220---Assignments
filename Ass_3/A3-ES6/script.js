import { EuclidianPoint } from './EuclidianPoint.js';
import { EuclidianPointList } from './EuclidianPointList.js';

const p1 = new EuclidianPoint([1, 1]);
const p2 = new EuclidianPoint([2, 2]);
const p3 = new EuclidianPoint([2, 3]);

const list = new EuclidianPointList([p1, p2, p3]);
list.positivePoints;
list.calculateDistance;

//Matthew Schoeman