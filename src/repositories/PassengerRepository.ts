import {EntityRepository, Repository} from "typeorm"
import {Passenger} from "../entities/Passenger"

@EntityRepository(Passenger)
export class PassengerRepository extends Repository<Passenger> {

}