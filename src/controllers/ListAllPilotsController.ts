import {Request, Response} from "express"
import { ListAllPilotsService } from "../services/ListAllPilotsService"

export class ListAllPilotsController {
    async handle(request: Request, response: Response){
        const listAllPilotsService = new ListAllPilotsService()

        const pilots = await listAllPilotsService.execute()

        return response.json(pilots)

    }
    
}