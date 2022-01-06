import {EntityRepository, Repository} from "typeorm"
import {Flight} from "../entities/Flight"

@EntityRepository(Flight)
export class FlightRepository extends Repository<Flight> {

}