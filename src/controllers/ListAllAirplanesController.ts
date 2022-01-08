import {Request, Response} from "express"
import { ListAllAirplanesService } from "../services/ListAllAirplanesService"

export class ListAllAirplanesController {
    async handle(request: Request, response: Response){
        const listAllAirplanesService = new ListAllAirplanesService()

        const airplanes = await listAllAirplanesService.execute()

        return response.json(airplanes)

    }
    
}