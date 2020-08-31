class CarsService {
    async getCars() {
        // NOTE Retrieve a list of car data from the server to update our AppState.
    }

    async addCar(data) {
        // NOTE A post request takes in the URLExtension and the data object to create from.
    }

    // cars/:id
    async updateCar(id) {
        // NOTE update requires the id and a body object
    }
    //cars/:id
    async deleteCar(id) {
        // NOTE delete only requires the id, there is no "body"
    }
}

export const carsService = new CarsService()