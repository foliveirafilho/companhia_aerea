import { getCustomRepository } from "typeorm";
import { CityRepository } from "../repositories/CityRepository";

interface ICityRequest {
    iata: string,
    state: string,
    country: string
}

export class CreateCityService {
    async execute({iata, state, country}: ICityRequest){
        const cityRepository = getCustomRepository(CityRepository)

        if(!iata){
            throw new Error("IATA can't be empty!")
        }

        const cityExists = await cityRepository.findOne({
            iata
        })

        if(cityExists){
            throw new Error("City already exists!")
        }

        const city = cityRepository.create({
            iata,
            state,
            country
        })

        await cityRepository.save(city)

        return city

    }
}