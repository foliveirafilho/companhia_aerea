import { getCustomRepository } from "typeorm";
import { AirplaneRepository } from "../repositories/AirplaneRepository";

interface IAirplaneRequest {
    serial_number: string,
    model: string,
}

export class CreateAirplaneService {
    async execute({serial_number, model}: IAirplaneRequest){
        const airplaneRepository = getCustomRepository(AirplaneRepository)

        if(!serial_number){
            throw new Error("Serial Number can't be empty!")
        }

        const airplaneExists = await airplaneRepository.findOne({
            serial_number
        })

        if(airplaneExists){
            throw new Error("Airplane already exists!")
        }

        const airplane = airplaneRepository.create({
            serial_number,
            model
        })

        await airplaneRepository.save(airplane)

        return airplane

    }
}