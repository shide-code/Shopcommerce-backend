import { Migration } from '@mikro-orm/migrations';

export class Migration20240203102916 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "merchant" add column "phone_number" varchar(32) not null;');
  }

}
