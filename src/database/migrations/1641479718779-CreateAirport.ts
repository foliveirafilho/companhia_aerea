import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAirport1641479718779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "airport",
                    columns: [
                        {
                            name: "uuid",
                            type: "varchar",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar",
                            isNullable: false,
                            isUnique: true
                        },
                        {
                            name: "iata_city",
                            type: "varchar",
                            length: "3",
                            isNullable: false
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FK_iata_city",
                            referencedTableName: "city",
                            referencedColumnNames: ["iata"],
                            columnNames: ["iata_city"],
                            onDelete: "CASCADE",
                            onUpdate: "CASCADE"
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("airport")
    }

}
