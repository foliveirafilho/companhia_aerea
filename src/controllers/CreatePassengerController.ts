import {Request, Response} from "express"
import { CreatePassengerService } from "../services/CreatePassengerService"

export class CreatePassengerController {
    async handle(request: Request, response: Response){
        const {rg, name, birthdate, passport} = request.body

        const createPassengerService = new CreatePassengerService()

        const passenger = await createPassengerService.execute({rg, name, birthdate, passport})

        return response.json(passenger)

    }
    
}