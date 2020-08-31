import { carsService } from "../Services/CarsService.js";

function _drawCars() {
    let template = ''
    // TODO get all the cars
    document.getElementById('cars-cards').innerHTML = template
}

//Public
export default class CarController {
    constructor() {
        // TODO Register all subscribers
    }

    addCar(e) {
        e.preventDefault();
        let form = e.target
        let data = {
            make: form.make.value,
            model: form.model.value,
            imgUrl: form.imgUrl.value,
            year: form.year.value,
            price: form.price.value,
            description: form.description.value
        }
        carsService.addCar(data)
        form.reset()
    }

    delete(id) {
        // if (window.confirm('Are you sure?')) {
        //     _cs.deleteCar(id)
        // }
    }

    toggleCarForm() {
        document.getElementById('car-form').classList.toggle("fade")
    }

}