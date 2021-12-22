import {Router} from "express"
import { CreateAirplaneController } from "./controllers/CreateAirplaneController"
import { CreatePassengerController } from "./controllers/CreatePassengerController"
import { CreatePilotController } from "./controllers/CreatePilotController"

const router = Router()

const createPassengerController = new CreatePassengerController()
const createPilotController = new CreatePilotController()
const createAirplaneController = new CreateAirplaneController()

router.post("/passenger", createPassengerController.handle)
router.post("/pilot", createPilotController.handle)
router.post("/airplane", createAirplaneController.handle)

export {router}