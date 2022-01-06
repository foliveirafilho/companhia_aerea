import {Entity, Column, PrimaryColumn, JoinColumn, ManyToOne} from "typeorm"
import { City } from "./City"
import {v4 as uuid} from "uuid"

@Entity("airport")
export class Airport {
    @PrimaryColumn()
    uuid: string

    @Column()
    name: string

    @Column()
    iata_city: string

    @JoinColumn({name: "iata_city"})
    @ManyToOne(() => City)
    city: City

    constructor(){
        if(!this.uuid){
            this.uuid = uuid()
        }
    }

}