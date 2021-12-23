import {Entity, PrimaryColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { Airplane } from "./Airplane";

@Entity("seat")
export class Seat {
    @PrimaryColumn()
    code: string

    @Column()
    type: string

    @Column()
    serial_num_airplane: string

    @JoinColumn({name: "serial_num_airplane"})
    @ManyToOne(() => Airplane)
    airplane: Airplane

}