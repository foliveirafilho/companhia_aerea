import {Request, Response} from "express"
import { CreateFlightService } from "../services/CreateFlightService"

export class CreateFlightController {
    async handle(request: Request, response: Response){
        const {serial_num_airplane, uuid_pilot, uuid_departure_airport, 
            uuid_arrival_airport, timestamp_departure, timestamp_arrival} = request.body

        const createFlightService = new CreateFlightService()

        const flight = await createFlightService.execute({serial_num_airplane, uuid_pilot, uuid_departure_airport, 
            uuid_arrival_airport, timestamp_departure, timestamp_arrival})

        return response.json(flight)

    }
    
}