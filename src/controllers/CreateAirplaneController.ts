import {Request, Response} from "express"
import { CreateAirplaneService } from "../services/CreateAirplaneService"

export class CreateAirplaneController {
    async handle(request: Request, response: Response){
        const {serial_number, model} = request.body

        const createAirplaneService = new CreateAirplaneService()

        const airplane = await createAirplaneService.execute({serial_number, model})

        return response.json(airplane)

    }
    
}