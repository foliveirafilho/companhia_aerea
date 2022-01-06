import {EntityRepository, Repository} from "typeorm"
import {Airport} from "../entities/Airport"

@EntityRepository(Airport)
export class AirportRepository extends Repository<Airport> {

}