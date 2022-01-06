import { getCustomRepository } from "typeorm";
import { AirportRepository } from "../repositories/AirportRepository";

interface IAirportRequest {
    name: string,
    iata_city: string,
}

export class CreateAirportService {
    async execute({name, iata_city}: IAirportRequest){
        const airportRepository = getCustomRepository(AirportRepository)

        if(!name){
            throw new Error("Name can't be empty!")
        }

        if(!iata_city){
            throw new Error("IATA can't be empty!")
        }

        const airportExists = await airportRepository.findOne({
            name
        })

        if(airportExists){
            throw new Error("Airport already exists!")
        }

        const airport = airportRepository.create({
            name,
            iata_city
        })

        await airportRepository.save(airport)

        return airport

    }
}