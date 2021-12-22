import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAirplane1640196749509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "airplane",
                columns: [
                    {
                        name: "serial_number",
                        type: "varchar",
                        length: "10",
                        isPrimary: true
                    },
                    {
                        name: "model",
                        type: "varchar",
                        length: "40",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("airplane")
    }

}
