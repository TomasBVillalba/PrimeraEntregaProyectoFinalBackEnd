import { Router } from "express";
import { cartController } from "../controller/cartControler.js";
const cartRouter = Router();

cartRouter.post('/', cartController.saveCart);                                   
cartRouter.delete('/:id', cartController.deleteCart);                               
cartRouter.get('/:id/productos', cartController.getProducts);                          
cartRouter.post('/:id/productos', cartController.saveProductByID);                        
cartRouter.delete('/:id/productos/:id_producto', cartController.deleteCartProductByID);       

export default cartRouter;