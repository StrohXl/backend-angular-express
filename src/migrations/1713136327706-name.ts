import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713136327706 implements MigrationInterface {
    name = 'Name1713136327706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "name" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "name" SET DEFAULT ''`);
    }

}
