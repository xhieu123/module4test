import {Request, Response} from "express";
import productService from "../service/carService";
import * as fs from "fs";
import carService from "../service/carService";

class CarController {
    private carService;

    constructor() {
        this.carService = carService;
    }

    findAll = async (req: Request, res: Response) => {
        let list = await this.carService.findAll();
        res.json(list);
    }
    add = async (req,res)=>{
        let data = await this.carService.add(req.body)
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.carService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.carService.delete(req.params.id);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.carService.findById(req.params.id);
        res.json(data)
    }
    sortPrice = async (req,res)=>{
        let list = await this.carService.sortPriceASC(req.query.carPrice)
        res.json(list)
    }
    findByName = async (req, res) => {
        let data = await this.carService.findByName(req.query.carName);
        res.json(data)
    }
    find = async(req,res)=>{
        let list
        if (req.query.carName){
            list = await this.carService.findByName(req.query.carName);
        }else if (req.query.carPrice){
            list = await this.carService.sortPriceASC(req.query.price)
        }else {
            list = await this.carService.findAll();
        }
        res.json(list)
    }

}

export default new CarController();
