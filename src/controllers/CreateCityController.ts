import {Request, Response} from "express"
import { CreateCityService } from "../services/CreateCityService"

export class CreateCityController {
    async handle(request: Request, response: Response){
        const {iata, state, country} = request.body

        const createCityService = new CreateCityService()

        const city = await createCityService.execute({iata, state, country})

        return response.json(city)

    }
    
}