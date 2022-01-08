import { getCustomRepository } from "typeorm";
import { PilotRepository } from "../repositories/PilotRepository";

export class ListAllPilotsService {
    async execute(){
        const pilotRepository = getCustomRepository(PilotRepository)

        const pilots = await pilotRepository.find()

        return pilots

    }
}