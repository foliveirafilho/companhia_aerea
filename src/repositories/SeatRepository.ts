import {EntityRepository, Repository} from "typeorm"
import {Seat} from "../entities/Seat"

@EntityRepository(Seat)
export class SeatRepository extends Repository<Seat> {

}