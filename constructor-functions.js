// JS did not have classes for a long time
// Constructor functions allowed us to have templates for creating an object before classes

function Car(make,model,year) {
    this.make = make
    this.model = model
    this.year = year

    this.describeSelf = function name(params) {
        console.log(`This is a ${this.make} of model ${this.model}`)
    }
}
// note that the new keyword must be used for a constructor function
const crosstrek = new Car("Subaru", "Crosstrek", 2018)
crosstrek.describeSelf()
