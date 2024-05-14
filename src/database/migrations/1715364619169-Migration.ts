import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715364619169 implements MigrationInterface {
    name = 'Migration1715364619169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "link" ADD "url2" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "link" DROP COLUMN "url2"`);
    }

}
