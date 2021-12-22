import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity("airplane")
export class Airplane {
    @PrimaryColumn()
    serial_number: string

    @Column()
    model: string

}
