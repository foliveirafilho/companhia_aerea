import { getCustomRepository } from "typeorm";
import { FlightRepository } from "../repositories/FlightRepository";
import { PassengerRepository } from "../repositories/PassengerRepository";
import { SeatRepository } from "../repositories/SeatRepository";
import { TicketRepository } from "../repositories/TicketRepository";

interface ITicketRequest {
    rg_passenger: string,
    code_seat: string,
    uuid_flight: string,
    bought_at: Date
}

export class CreateTicketService {
    async execute({rg_passenger, code_seat, uuid_flight, bought_at}: ITicketRequest){
        const ticketRepository = getCustomRepository(TicketRepository)
        const passengerRepository = getCustomRepository(PassengerRepository)
        const seatRepository = getCustomRepository(SeatRepository)
        const flightRepository = getCustomRepository(FlightRepository)

        const passengerExists = await passengerRepository.findOne({
            rg: rg_passenger
        })

        if(!passengerExists){
            throw new Error("Passenger doesn't exist!")
        }

        const seatExists = await seatRepository.findOne({
            code: code_seat
        })

        if(!seatExists){
            throw new Error("Seat doesn't exist!")
        }

        const flightExists = await flightRepository.findOne({
            uuid: uuid_flight
        })

        if(!flightExists){
            throw new Error("Flight doesn't exist!")
        }

        const ticket = ticketRepository.create({
            rg_passenger, 
            code_seat, 
            uuid_flight, 
            bought_at
        })

        await ticketRepository.save(ticket)

        return ticket

    }
}