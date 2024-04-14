import { MigrationInterface, QueryRunner } from "typeorm";

export class Name1713136533156 implements MigrationInterface {
  name = "Name1713136533156";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" ADD "new_name" character varying(20)`
    );
    await queryRunner.query(`
        UPDATE "task" SET "new_name" = "name"
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "new_name"`);
  }
}
