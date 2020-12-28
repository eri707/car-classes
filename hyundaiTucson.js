// import parent class
const Car = require('./car')

// create child class
class HyundaiTucson extends Car {
    constructor(make, model, id) {
        super(make, model, 20, 35, id);
    }
}

module.exports = HyundaiTucson;