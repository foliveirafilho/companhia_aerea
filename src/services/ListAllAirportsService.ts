import { getCustomRepository } from "typeorm";
import { AirportRepository } from "../repositories/AirportRepository";

export class ListAllAirportsService {
    async execute(){
        const airportRepository = getCustomRepository(AirportRepository)

        const airports = await airportRepository.find()

        return airports

    }
}