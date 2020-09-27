const isNumber = (currentNumber) => typeof(currentNumber) === "number";
export let EuclidianPoint = class {
    constructor(arrNum) {
        let coords = [];
        try {
            if (arrNum.every(isNumber)) {
                this.coords = [...arrNum];

            } else {
                throw "Not all values are numbers";
            }
        } catch (err) {

        };
    }
    set coordinates(newValues) {
        if (newValues.every(isNumber)) {
            this.coords = [...newValues];
        }
    }
    calculateDistance(x, y) {
        var eResult = Math.sqrt(Math.pow((x - this.coords[0]), 2) + Math.pow((y - this.coords[1]), 2));
        return eResult;
    }
};
//Matthew Schoeman