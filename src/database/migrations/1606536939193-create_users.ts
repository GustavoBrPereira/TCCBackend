import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1606357545226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //o numero sempre sera positivo
                    isPrimary: true,
                    isGenerated: true, //sera gerada automaticamente
                    generationStrategy: "increment",
                },
                {
                    name: 'emailAccount',
                    type: 'varchar',
                },
                {
                    name: 'passwordAccount',
                    type: 'varchar',
                },
                {
                    name: 'projectName',
                    type: 'text',
                },
                {
                    name: 'customerName',
                    type: 'varchar',
                },
                {
                    name: 'customerData',
                    type: 'varchar',
                },
                {
                    name: 'customerAddress',
                    type: 'text',
                },
                {
                    name: 'customerCNPJ',
                    type: 'varchar',
                },
                {
                    name: 'customerEmail',
                    type: 'varchar',
                },
                {
                    name: 'providerCompanyName',
                    type: 'varchar',
                },
                {
                    name: 'providerOwnerName',
                    type: 'text',
                },
                {
                    name: 'providerAddress',
                    type: 'text',
                },
                {
                    name: 'providerCNPJ',
                    type: 'varchar',
                },
                {
                    name: 'providerEmail',
                    type: 'varchar',
                },
                {
                    name: 'bank',
                    type: 'varchar',
                },
                {
                    name: 'bankAgency',
                    type: 'varchar',
                },
                {
                    name: 'operation',
                    type: 'varchar',
                },
                {
                    name: 'savingsAccount', //conta poupança
                    type: 'varchar',
                },
                {
                    name: 'phoneContact',
                    type: 'varchar',
                },
                {
                    name: 'pathImage',
                    type: 'varchar',
                    isNullable: true
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}

