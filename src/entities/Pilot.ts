import {Entity, PrimaryColumn, Column, Unique} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("pilot")
export class Pilot {

    @PrimaryColumn()
    readonly uuid: string

    @Column()
    name: string

    @Column({unique: true})
    passport: string

    @Column()
    birthdate: Date

    constructor(){
        if(!this.uuid){
            this.uuid = uuid()
        }
    }

}
