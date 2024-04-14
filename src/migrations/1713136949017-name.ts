import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713136949017 implements MigrationInterface {
    name = 'Name1713136949017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "new_name" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "new_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "name" character varying(10) NOT NULL`);
    }

}
