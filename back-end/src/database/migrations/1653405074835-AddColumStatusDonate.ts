import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumStatusDonate1653405074835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'donates',
      new TableColumn({
        name: 'status_donate',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('donates', 'status_donate');
  }
}
