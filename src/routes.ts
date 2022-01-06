import {Router} from "express"
import { CreateAirplaneController } from "./controllers/CreateAirplaneController"
import { CreateAirportController } from "./controllers/CreateAirportController"
import { CreateCityController } from "./controllers/CreateCityController"
import { CreateFlightController } from "./controllers/CreateFlightController"
import { CreatePassengerController } from "./controllers/CreatePassengerController"
import { CreatePilotController } from "./controllers/CreatePilotController"
import { CreateSeatController } from "./controllers/CreateSeatController"

const router = Router()

const createPassengerController = new CreatePassengerController()
const createPilotController = new CreatePilotController()
const createAirplaneController = new CreateAirplaneController()
const createSeatController = new CreateSeatController()
const createCityController = new CreateCityController()
const createAirportController = new CreateAirportController()
const createFlightController = new CreateFlightController()

router.post("/passenger", createPassengerController.handle)
router.post("/pilot", createPilotController.handle)
router.post("/airplane", createAirplaneController.handle)
router.post("/seat", createSeatController.handle)
router.post("/city", createCityController.handle)
router.post("/airport", createAirportController.handle)
router.post("/flight", createFlightController.handle)

export {router}