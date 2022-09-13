import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaSync1663076073209 implements MigrationInterface {
    name = 'SchemaSync1663076073209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffees" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffees" DROP COLUMN "description"`);
    }

}
