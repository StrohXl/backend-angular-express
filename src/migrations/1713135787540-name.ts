import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713135787540 implements MigrationInterface {
    name = 'Name1713135787540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "status" TO "state"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "state" TO "status"`);
    }

}
