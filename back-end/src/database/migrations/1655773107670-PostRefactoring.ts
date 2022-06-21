import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1655773107670 implements MigrationInterface {
    name = 'PostRefactoring1655773107670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "donates" DROP CONSTRAINT "relation_id_of_user"`);
        await queryRunner.query(`ALTER TABLE "donates" DROP CONSTRAINT "relation_donate_of_tag"`);
        await queryRunner.query(`CREATE TABLE "my_file" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "data" bytea NOT NULL, "mimeType" character varying NOT NULL, CONSTRAINT "PK_8facde73c0557349556081024ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "image_id" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_b1aae736b7c5d6925efa8563527" UNIQUE ("image_id")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "donates" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "donates" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "donates" ALTER COLUMN "tag_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "donates" ADD CONSTRAINT "UQ_bf5a7205e82a474d52ce93bd950" UNIQUE ("tag_id")`);
        await queryRunner.query(`ALTER TABLE "donates" ALTER COLUMN "status_donate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_b1aae736b7c5d6925efa8563527" FOREIGN KEY ("image_id") REFERENCES "my_file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "donates" ADD CONSTRAINT "FK_bf5a7205e82a474d52ce93bd950" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "donates" DROP CONSTRAINT "FK_bf5a7205e82a474d52ce93bd950"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_b1aae736b7c5d6925efa8563527"`);
        await queryRunner.query(`ALTER TABLE "donates" ALTER COLUMN "status_donate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "donates" DROP CONSTRAINT "UQ_bf5a7205e82a474d52ce93bd950"`);
        await queryRunner.query(`ALTER TABLE "donates" ALTER COLUMN "tag_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "donates" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "donates" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_b1aae736b7c5d6925efa8563527"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "image_id"`);
        await queryRunner.query(`DROP TABLE "my_file"`);
        await queryRunner.query(`ALTER TABLE "donates" ADD CONSTRAINT "relation_donate_of_tag" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "donates" ADD CONSTRAINT "relation_id_of_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
