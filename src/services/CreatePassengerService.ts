import { getCustomRepository } from "typeorm";
import { PassengerRepository } from "../repositories/PassengerRepository";

interface IPassengerRequest {
    rg: string,
    name: string,
    birthdate: Date,
    passport?: string
}

export class CreatePassengerService {
    async execute({rg, name, birthdate, passport}: IPassengerRequest){
        const passengerRepository = getCustomRepository(PassengerRepository)

        if(!rg){
            throw new Error("RG can't be empty!")
        }

        const passengerExists = await passengerRepository.findOne({
            rg
        })

        if(passengerExists){
            throw new Error("Passenger already exists!")
        }

        const passenger = passengerRepository.create({
            rg,
            name, 
            birthdate, 
            passport
        })

        await passengerRepository.save(passenger)

        return passenger

    }
}