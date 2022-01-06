import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTicket1641489907238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ticket",
                columns: [
                    {
                        name: "rg_passenger",
                        type: "varchar",
                        length: "8",
                        isPrimary: true,
                    },
                    {
                        name: "code_seat",
                        type: "varchar",
                        length: "13",
                        isPrimary: true
                    },
                    {
                        name: "uuid_flight",
                        type: "varchar",
                        length: "36",
                        isPrimary: true
                    },
                    {
                        name: "bought_at",
                        type: "timestamp",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("ticket")
    }

}
