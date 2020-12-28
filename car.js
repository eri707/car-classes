class Car {
    constructor(make, model, mpg, fuelInGallons, id) {
        this._make = make;
        this._model = model;
        this._mpg = mpg;
        this._fuelInGallons = fuelInGallons;
        this._id = id;
    }
    drive(rangeInMiles) {
        let usedGallon = rangeInMiles / this._mpg;
        let remainingFuel = this._fuelInGallons - usedGallon;
        return remainingFuel;
    }
}

module.exports = Car;