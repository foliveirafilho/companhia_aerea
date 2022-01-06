import {Entity, Column, PrimaryColumn, JoinColumn, ManyToOne} from "typeorm";
import {v4 as uuid} from "uuid";
import { Airplane } from "./Airplane";
import { Airport } from "./Airport";
import { Pilot } from "./Pilot";

@Entity("flight")
export class Flight {
    @PrimaryColumn()
    uuid: string

    @Column()
    serial_num_airplane: string

    @JoinColumn({name: "serial_num_airplane"})
    @ManyToOne(() => Airplane)
    airplane: Airplane

    @Column()
    uuid_pilot: string

    @JoinColumn({name: "uuid_pilot"})
    @ManyToOne(() => Pilot)
    pilot: Pilot

    @Column()
    uuid_departure_airport: string

    @JoinColumn({name: "uuid_departure_airport"})
    @ManyToOne(() => Airport)
    departure_airport: Airport

    @Column()
    uuid_arrival_airport: string

    @JoinColumn({name: "uuid_arrival_airport"})
    @ManyToOne(() => Airport)
    arrival_airport: Airport

    @Column()
    timestamp_departure: string

    @Column()
    timestamp_arrival: string

    constructor(){
        if(!this.uuid){
            this.uuid = uuid()
        }
    }

}
