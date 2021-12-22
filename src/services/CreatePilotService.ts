import { getCustomRepository } from "typeorm";
import { PilotRepository } from "../repositories/PilotRepository";

interface IPilotRequest {
    name: string,
    birthdate: Date,
    passport: string
}

export class CreatePilotService {
    async execute({name, birthdate, passport}: IPilotRequest){
        const pilotRepository = getCustomRepository(PilotRepository)

        const pilotExists = await pilotRepository.findOne({
            passport
        })

        if(pilotExists){
            throw new Error("Pilot already exists!")
        }

        const pilot = pilotRepository.create({
            name, 
            birthdate, 
            passport
        })

        await pilotRepository.save(pilot)

        return pilot

    }
}