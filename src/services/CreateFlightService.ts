import { getCustomRepository } from "typeorm";
import { FlightRepository } from "../repositories/FlightRepository";

interface IFlightRequest {
    serial_num_airplane: string,
    uuid_pilot: string,
    uuid_departure_airport: string,
    uuid_arrival_airport: string,
    timestamp_departure: string,
    timestamp_arrival: string
}

export class CreateFlightService {
    async execute({serial_num_airplane, uuid_pilot, uuid_departure_airport, 
        uuid_arrival_airport, timestamp_departure, timestamp_arrival}: IFlightRequest){
        const flightRepository = getCustomRepository(FlightRepository)

        if(!serial_num_airplane || !uuid_pilot || !uuid_departure_airport || 
            !uuid_arrival_airport || !timestamp_departure || !timestamp_arrival){
            throw new Error("There can't be any fields empty!")
        }

        if(uuid_departure_airport == uuid_arrival_airport){
            throw new Error("The route of the flight is impossible!")
        }

        if(timestamp_departure > timestamp_arrival){
            throw new Error("It's not Back to the Future! The timestamp is wrong!")
        }

        const flight = flightRepository.create({
            serial_num_airplane,
            uuid_pilot,
            uuid_departure_airport,
            uuid_arrival_airport, 
            timestamp_departure,
            timestamp_arrival
        })

        await flightRepository.save(flight)

        return flight

    }
}