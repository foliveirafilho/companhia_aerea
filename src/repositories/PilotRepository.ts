import {EntityRepository, Repository} from "typeorm"
import {Pilot} from "../entities/Pilot"

@EntityRepository(Pilot)
export class PilotRepository extends Repository<Pilot> {

}