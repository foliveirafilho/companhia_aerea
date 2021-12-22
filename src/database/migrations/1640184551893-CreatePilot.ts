import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePilot1640184551893 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pilot",
                columns: [
                    {
                        name: "uuid",
                        type: "varchar",
                        length: "36",
                        isPrimary: true
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
                        isUnique: true,
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
        await queryRunner.dropTable("pilot")
    }

}
