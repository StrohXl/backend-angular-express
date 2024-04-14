import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713136981364 implements MigrationInterface {
    name = 'Name1713136981364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "new_name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "name" TO "new_name"`);
    }

}
