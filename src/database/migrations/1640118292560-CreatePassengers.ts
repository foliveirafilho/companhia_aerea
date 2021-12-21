import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePassengers1640118292560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "passenger",
                columns: [
                    {
                        name: "rg",
                        type: "varchar",
                        length: "8",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "passport",
                        type: "varchar",
                        length: "8",
                        isNullable: true,
                        default: "NULL"
                    },
                    {
                        name: "birthdate",
                        type: "date",
                        isNullable: false
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("passenger")
    }

}
