import {Router} from "express";
import carController from "../controller/carController";

const carRouter = Router();
carRouter.get('/', carController.find);
carRouter.post('/', carController.add);
carRouter.put('/:id', carController.update);
carRouter.delete('/:id', carController.delete);
carRouter.get('/:id', carController.findById);
export default carRouter;
