import {Router} from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/AuthMiddlewares.js";
import ChatGroupController from "../controllers/ChatGroupController.js";

const router = Router();


// auth routes
router.post("/auth/login",AuthController.login);

//Chat Group routes
router.post("/chat-group",authMiddleware,ChatGroupController.store);


export default router;