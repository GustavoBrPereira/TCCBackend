import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProjects1606531976106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "projects",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'numeroRomaneio',
                    type: 'varchar'
                },
                {
                    name: 'nomeProduto',
                    type: 'varchar'
                },
                {
                    name: 'numeroCorte',
                    type: 'varchar'
                },
                {
                    name: 'dataEntrega',
                    type: 'varchar'
                },
                {
                    name: 'observacoes',
                    type: 'text'
                },
                {
                    name: 'numeroPecas',
                    type: 'varchar'
                },
                {
                    name: 'numeroSobras',
                    type: 'varchar'
                },
                {
                    name: 'numeroPecasLavanderia',
                    type: 'varchar'
                },
                {
                    name: 'numeroPecasPiloto',
                    type: 'varchar'
                },
                {
                    name: 'totalPecasPorNumeracao',
                    type: 'integer',
                    isNullable: true

                },
                {
                    name: 'numeroGrades',
                    type: 'varchar'
                },
                {
                    name: 'pecasSemDefeito',
                    type: 'integer',
                    isNullable: true
                },
                {
                    name: 'clienteTONON',
                    type: 'varchar'
                },
                {
                    name: 'numeroPecasRelave',
                    type: 'varchar'
                },
                {
                    name: 'numeroPecasDefeito',
                    type: 'varchar'
                },
                {
                    name: 'numeroPecasZiperQuebrado',
                    type: 'varchar'
                },
                {
                    name: 'numeroPecasFaltaPassantes',
                    type: 'varchar'
                },
                {
                    name: 'pecasComProblema',
                    type: 'integer',
                    isNullable: true
                },
                {
                    name: 'totalPecas', 
                    type: 'integer',
                    isNullable: true
                },
                {
                    name: 'user_id',
                    type: 'integer'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects');
    }

}