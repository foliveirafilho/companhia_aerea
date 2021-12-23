import {Entity, Column, PrimaryColumn} from "typeorm"

@Entity("city")
export class City {
    @PrimaryColumn()
    iata: string

    @Column()
    state: string

    @Column()
    country: string

}