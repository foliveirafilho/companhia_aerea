import {Request, Response} from "express"
import { CreateAirportService } from "../services/CreateAirportService"

export class CreateAirportController {
    async handle(request: Request, response: Response){
        const {name, iata_city} = request.body

        const createAirportService = new CreateAirportService()

        const airport = await createAirportService.execute({name, iata_city})

        return response.json(airport)

    }
    
}