import { Router } from "express";
import usersControllers from "../controllers/users.controllers.js";

const router = Router();

router.post("/create", usersControllers.createUser);
router.get("/allUsers", usersControllers.getUsers);
router.get("/getUser/:id_user", usersControllers.getUser);
router.put("/updateUser/:id_user", usersControllers.updateUser);
router.delete("/deleteUser/:id_user", usersControllers.deleteUser);

export default router;
