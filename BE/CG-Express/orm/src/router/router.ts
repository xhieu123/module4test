import {Router} from "express";
import productRouter from "./carRouter";
import carRouter from "./carRouter";

const router = Router();
router.use('/cars', carRouter);
export default router;
