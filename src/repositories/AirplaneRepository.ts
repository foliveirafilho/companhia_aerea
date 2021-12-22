import {EntityRepository, Repository} from "typeorm"
import {Airplane} from "../entities/Airplane"

@EntityRepository(Airplane)
export class AirplaneRepository extends Repository<Airplane> {

}