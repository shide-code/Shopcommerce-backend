import { Migration } from '@mikro-orm/migrations';

export class Migration20240203102755 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "users_address" add column "phone_number" varchar(32) null;');

    this.addSql('alter table "users" add column "phone_number" varchar(32) not null;');
  }

}
