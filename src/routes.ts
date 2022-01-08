import {Router} from "express"
import { CreateAirplaneController } from "./controllers/CreateAirplaneController"
import { CreateAirportController } from "./controllers/CreateAirportController"
import { CreateCityController } from "./controllers/CreateCityController"
import { CreateFlightController } from "./controllers/CreateFlightController"
import { CreatePassengerController } from "./controllers/CreatePassengerController"
import { CreatePilotController } from "./controllers/CreatePilotController"
import { CreateSeatController } from "./controllers/CreateSeatController"
import { CreateTicketController } from "./controllers/CreateTicketController"
import { ListAllAirplanesController } from "./controllers/ListAllAirplanesController"
import { ListAllAirportsController } from "./controllers/ListAllAirportsController"
import { ListAllPilotsController } from "./controllers/ListAllPilotsController"

const router = Router()

const createPassengerController = new CreatePassengerController()
const createPilotController = new CreatePilotController()
const createAirplaneController = new CreateAirplaneController()
const createSeatController = new CreateSeatController()
const createCityController = new CreateCityController()
const createAirportController = new CreateAirportController()
const createFlightController = new CreateFlightController()
const createTicketController = new CreateTicketController()

const listAllAirplanesController = new ListAllAirplanesController()
const listAllAirportsController = new ListAllAirportsController()
const listAllPilotsController = new ListAllPilotsController()

router.post("/passenger", createPassengerController.handle)
router.post("/pilot", createPilotController.handle)
router.post("/airplane", createAirplaneController.handle)
router.post("/seat", createSeatController.handle)
router.post("/city", createCityController.handle)
router.post("/airport", createAirportController.handle)
router.post("/flight", createFlightController.handle)
router.post("/ticket", createTicketController.handle)

router.get("/airplane", listAllAirplanesController.handle)
router.get("/airport", listAllAirportsController.handle)
router.get("/pilot", listAllPilotsController.handle)

export {router}