declare class CarService {
    private carRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    delete: (id: any) => Promise<any>;
    findAll: () => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
    sortPriceASC: (price: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
}
declare const _default: CarService;
export default _default;
