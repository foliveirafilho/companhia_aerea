import {Router} from "express"
import { CreatePassengerController } from "./controllers/CreatePassengerController"

const router = Router()

const createPassengerController = new CreatePassengerController()

router.post("/passenger", createPassengerController.handle)

export {router}