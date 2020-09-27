const checkValid = (current) => {
    console.log("hello");
    // typeof(current) === "number";
}
import { EuclidianPoint } from './EuclidianPoint.js';
export let EuclidianPointList = class {

    constructor(coordsLists) {
        let _listOfCoords = [];
        try {

            let isValid = true;
            let obList = coordsLists[0].coords.length;

            let checkValidity = coordsLists.reduce(function(passedIn, object) {

                if (object.coords.length != obList) {
                    isValid = false;
                }
            }, 0);
            for (var i = 0; i < coordsLists.length; i++) {
                for (var j = 0; j < coordsLists[i].coords.length; j++) {
                    if (typeof(coordsLists[i].coords[j]) !== "number") {
                        isValid = false;
                        throw "Invalid elements";
                    }
                }
            }
            if (isValid) {
                this._listOfCoords = [...coordsLists];
            }
        } catch (something) {}
    }
    get positivePoints() {
        let newArray = [];
        for (var a = 0; a < this._listOfCoords.length; a++) {
            if (this._listOfCoords[a].coords[0] > 0 && this._listOfCoords[a].coords[1] > 0) {
                newArray.push(this._listOfCoords[a]);
            }
        }
        return newArray;
    }
    get calculateDistance() {

        let leftSide = this._listOfCoords[this._listOfCoords.length - 1].coords[0];;
        let rightSide = this._listOfCoords[this._listOfCoords.length - 1].coords[1];

        for (let i = this._listOfCoords.length - 2; i > -1; i--) {

            leftSide = this._listOfCoords[i].coords[0];
        }
        let eResult = Math.sqrt(Math.pow(leftSide, 2) + Math.pow(rightSide, 2));
        return eResult;
    }

};
//Matthew Schoeman