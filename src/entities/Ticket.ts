import {Entity, PrimaryColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Airplane } from "./Airplane";
import { Flight } from "./Flight";
import { Passenger } from "./Passenger";
import { Seat } from "./Seat";

@Entity("ticket")
export class Ticket {
    @PrimaryColumn()
    rg_passenger: string

    @JoinColumn({name: "rg_passenger"})
    @ManyToOne(() => Passenger)
    passenger: Passenger

    @PrimaryColumn()
    code_seat: string

    @JoinColumn({name: "code_seat"})
    @ManyToOne(() => Seat)
    seat: Seat

    @PrimaryColumn()
    uuid_flight: string

    @JoinColumn({name: "uuid_flight"})
    @ManyToOne(() => Flight)
    flight: Flight

    @Column()
    bought_at: Date

}