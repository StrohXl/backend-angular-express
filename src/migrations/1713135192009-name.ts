import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713135192009 implements MigrationInterface {
    name = 'Name1713135192009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "name" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ALTER COLUMN "name" DROP NOT NULL`);
    }

}
