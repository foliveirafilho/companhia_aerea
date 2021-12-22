import {Request, Response} from "express"
import { CreatePilotService } from "../services/CreatePilotService"

export class CreatePilotController {
    async handle(request: Request, response: Response){
        const {name, birthdate, passport} = request.body

        const createPilotService = new CreatePilotService()

        const pilot = await createPilotService.execute({name, birthdate, passport})

        return response.json(pilot)

    }
    
}