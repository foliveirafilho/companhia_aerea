import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFlight1641484454061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "flight",
                columns: [
                    {
                        name: "uuid",
                        type: "varchar",
                        length: "36",
                        isPrimary: true
                    },
                    {
                        name: "serial_num_airplane",
                        type: "varchar",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "uuid_pilot",
                        type: "varchar",
                        length: "36",
                        isNullable: false
                    },
                    {
                        name: "uuid_departure_airport",
                        type: "varchar",
                        length: "36",
                        isNullable: false
                    },
                    {
                        name: "uuid_arrival_airport",
                        type: "varchar",
                        length: "36",
                        isNullable: false
                    },
                    {
                        name: "timestamp_departure",
                        type: "timestamp",
                        isNullable: false
                    },
                    {
                        name: "timestamp_arrival",
                        type: "timestamp",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_serial_num_airplane_flight",
                        referencedTableName: "airplane",
                        referencedColumnNames: ["serial_number"],
                        columnNames: ["serial_num_airplane"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FK_uuid_pilot",
                        referencedTableName: "pilot",
                        referencedColumnNames: ["uuid"],
                        columnNames: ["uuid_pilot"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FK_departure_airport",
                        referencedTableName: "airport",
                        referencedColumnNames: ["uuid"],
                        columnNames: ["uuid_departure_airport"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FK_arrival_airport",
                        referencedTableName: "airport",
                        referencedColumnNames: ["uuid"],
                        columnNames: ["uuid_arrival_airport"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("flight")
    }

}
