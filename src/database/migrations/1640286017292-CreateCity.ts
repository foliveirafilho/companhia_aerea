import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCity1640286017292 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "city",
                columns: [
                    {
                        name: "iata",
                        type: "varchar",
                        length: "3",
                        isPrimary: true
                    },
                    {
                        name: "state",
                        type: "varchar",
                        length: "2",
                        isNullable: false
                    },
                    {
                        name: "country",
                        type: "varchar",
                        length: "3",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("city")
    }

}
