import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSeat1640280229887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "seat",
                columns: [
                    {
                        name: "code",
                        type: "varchar",
                        length: "13",
                        isPrimary: true
                    },
                    {
                        name: "type",
                        type: "varchar",
                        length: "2",
                        isNullable: false
                    },
                    {
                        name: "serial_num_airplane",
                        type: "varchar",
                        length: "10",
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_serial_num_airplane",
                        referencedTableName: "airplane",
                        referencedColumnNames: ["serial_number"],
                        columnNames: ["serial_num_airplane"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("seat")
    }

}
