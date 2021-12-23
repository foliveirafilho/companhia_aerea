import {Request, Response} from "express"
import { CreateSeatService } from "../services/CreateSeatService"

export class CreateSeatController {
    async handle(request: Request, response: Response){
        const {code, type, serial_num_airplane} = request.body

        const createSeatService = new CreateSeatService()

        const seat = await createSeatService.execute({code, type, serial_num_airplane})

        return response.json(seat)

    }
    
}