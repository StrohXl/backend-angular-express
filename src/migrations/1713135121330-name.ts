import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713135121330 implements MigrationInterface {
    name = 'Name1713135121330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "name" character varying(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "task" ADD "name" character varying(10) NOT NULL`);
    }

}
