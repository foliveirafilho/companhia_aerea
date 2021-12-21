import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity("passenger")
export class Passenger {

    @PrimaryColumn()
    readonly rg: string

    @Column()
    name: string

    @Column()
    passport: string

    @Column()
    birthdate: Date

}
