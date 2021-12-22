import {Router} from "express"
import { CreatePassengerController } from "./controllers/CreatePassengerController"
import { CreatePilotController } from "./controllers/CreatePilotController"

const router = Router()

const createPassengerController = new CreatePassengerController()
const createPilotController = new CreatePilotController()

router.post("/passenger", createPassengerController.handle)
router.post("/pilot", createPilotController.handle)

export {router}