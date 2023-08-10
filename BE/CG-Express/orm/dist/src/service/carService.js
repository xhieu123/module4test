"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const cart_1 = require("../entity/cart");
const typeorm_1 = require("typeorm");
class CarService {
    constructor() {
        this.getAll = async () => {
            let cars = await this.carRepository.find();
            return cars;
        };
        this.add = async (product) => {
            await this.carRepository.save(product);
        };
        this.delete = async (id) => {
            return await this.carRepository.delete(id);
        };
        this.findAll = async () => {
            return await this.carRepository.find();
        };
        this.update = async (id, data) => {
            return await this.carRepository.update(id, data);
        };
        this.sortPriceASC = async (price) => {
            let list = await this.carRepository.find({
                order: { carPrice: "asc" }
            });
            return list;
        };
        this.findById = async (id) => {
            return await this.carRepository.find({
                where: {
                    id: id
                }
            });
        };
        this.findByName = async (name) => {
            return await this.carRepository.find({
                where: {
                    carName: (0, typeorm_1.Like)(`%${name}%`)
                }
            });
        };
        this.carRepository = data_source_1.AppDataSource.getRepository(cart_1.Car);
    }
}
exports.default = new CarService();
//# sourceMappingURL=carService.js.map