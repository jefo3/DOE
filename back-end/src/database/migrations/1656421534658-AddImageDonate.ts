import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddImageDonate1656421534658 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'donates',
        new TableColumn({
          name: 'image',
          type: 'varchar',
          isNullable: true,
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('donates', 'image');
    }
}
