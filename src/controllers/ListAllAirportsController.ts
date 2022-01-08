import {Request, Response} from "express"
import { ListAllAirportsService } from "../services/ListAllAirportsService"

export class ListAllAirportsController {
    async handle(request: Request, response: Response){
        const listAllAirportsService = new ListAllAirportsService()

        const airports = await listAllAirportsService.execute()

        return response.json(airports)

    }
    
}