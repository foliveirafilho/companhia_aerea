import {Request, Response} from "express"
import { CreateTicketService } from "../services/CreateTicketService"

export class CreateTicketController {
    async handle(request: Request, response: Response){
        const {rg_passenger, code_seat, uuid_flight, bought_at} = request.body

        const createTicketService = new CreateTicketService()

        const ticket = await createTicketService.execute({rg_passenger, code_seat, uuid_flight, bought_at})

        return response.json(ticket)

    }
    
}