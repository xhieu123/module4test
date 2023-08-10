"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carService_1 = __importDefault(require("../service/carService"));
class CarController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await this.carService.findAll();
            res.json(list);
        };
        this.add = async (req, res) => {
            let data = await this.carService.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await this.carService.update(req.params.id, req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await this.carService.delete(req.params.id);
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await this.carService.findById(req.params.id);
            res.json(data);
        };
        this.sortPrice = async (req, res) => {
            let list = await this.carService.sortPriceASC(req.query.carPrice);
            res.json(list);
        };
        this.findByName = async (req, res) => {
            let data = await this.carService.findByName(req.query.carName);
            res.json(data);
        };
        this.find = async (req, res) => {
            let list;
            if (req.query.carName) {
                list = await this.carService.findByName(req.query.carName);
            }
            else if (req.query.carPrice) {
                list = await this.carService.sortPriceASC(req.query.price);
            }
            else {
                list = await this.carService.findAll();
            }
            res.json(list);
        };
        this.carService = carService_1.default;
    }
}
exports.default = new CarController();
//# sourceMappingURL=carController.js.map