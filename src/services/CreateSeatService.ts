import { getCustomRepository } from "typeorm";
import { AirplaneRepository } from "../repositories/AirplaneRepository";
import { SeatRepository } from "../repositories/SeatRepository";

interface ISeatRequest {
    code: string,
    type: string,
    serial_num_airplane: string
}

export class CreateSeatService {
    async execute({code, type, serial_num_airplane}: ISeatRequest){
        const seatRepository = getCustomRepository(SeatRepository)
        const airplaneRepository = getCustomRepository(AirplaneRepository)

        const airplaneExists = await airplaneRepository.findOne({
            serial_number: serial_num_airplane
        })

        if(!airplaneExists){
            throw new Error("Airplane does not exist!")
        }

        const seatExists = await seatRepository.findOne({
            code
        })

        if(seatExists){
            throw new Error("Seat already exists!")
        }

        const seat = seatRepository.create({
            code, 
            type, 
            serial_num_airplane
        })

        await seatRepository.save(seat)

        return seat

    }
}