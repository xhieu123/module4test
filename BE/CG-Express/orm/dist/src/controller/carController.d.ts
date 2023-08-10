import { Request, Response } from "express";
declare class CarController {
    private carService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: any, res: any) => Promise<void>;
    update: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
    findById: (req: any, res: any) => Promise<void>;
    sortPrice: (req: any, res: any) => Promise<void>;
    findByName: (req: any, res: any) => Promise<void>;
    find: (req: any, res: any) => Promise<void>;
}
declare const _default: CarController;
export default _default;
