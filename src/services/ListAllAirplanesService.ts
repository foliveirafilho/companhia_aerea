import { getCustomRepository } from "typeorm";
import { AirplaneRepository } from "../repositories/AirplaneRepository";

export class ListAllAirplanesService {
    async execute(){
        const airplaneRepository = getCustomRepository(AirplaneRepository)

        const airplanes = await airplaneRepository.find()

        return airplanes

    }
}