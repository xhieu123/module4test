
import {AppDataSource} from "../data-source";
import {Car} from "../entity/cart";
import {Like} from "typeorm";

class CarService {
    private carRepository;
    constructor() {
        this.carRepository = AppDataSource.getRepository(Car);
    }

    getAll = async () => {
        let cars = await this.carRepository.find();
        return cars;
    }

    add = async (product) => {
        await this.carRepository.save(product)
    }
    delete = async (id) => {
        return await this.carRepository.delete(id);
    }

    findAll = async () => {
        return await this.carRepository.find();
    }
    update = async (id, data) => {
        return await this.carRepository.update(id, data);
    }
    sortPriceASC = async (price) => {
        let list = await this.carRepository.find({
            order: {carPrice: "asc"}
        })
        return list
    }
    findById = async (id) => {
        return await this.carRepository.find({
            where: {
                id: id
            }
        })
    }
    findByName = async (name) => {
        return await this.carRepository.find({
            where: {
                carName: Like(`%${name}%`)
            }
        })
    }
}

export default new CarService();
