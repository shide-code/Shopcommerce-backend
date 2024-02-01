import { Migration } from '@mikro-orm/migrations';

export class Migration20240201134038 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "merchant" ("id" serial primary key, "created_by" int null, "updated_by" int null, "deleted_by" int null, "created_at" timestamptz not null, "updated_at" timestamptz null, "deleted_at" timestamptz null, "user_id" int not null, "name" varchar(255) not null, "address" text not null, "province" varchar(255) null, "city" varchar(255) null, "district" varchar(255) null, "urban_village" varchar(255) null);');

    this.addSql('create table "users_address" ("id" serial primary key, "created_by" int null, "updated_by" int null, "deleted_by" int null, "created_at" timestamptz not null, "updated_at" timestamptz null, "deleted_at" timestamptz null, "user_id" int not null, "address" text not null, "province" varchar(255) null, "city" varchar(255) null, "district" varchar(255) null, "urban_village" varchar(255) null);');

    this.addSql('create table "users" ("id" serial primary key, "created_by" int null, "updated_by" int null, "deleted_by" int null, "created_at" timestamptz not null, "updated_at" timestamptz null, "deleted_at" timestamptz null, "first_name" varchar(255) not null, "last_name" varchar(255) null, "email" varchar(255) not null, "password" text not null, "is_active" boolean not null default false, "need_verification" boolean not null default true, "path_picture" text null, "base_path" text null, "is_forgot_password" boolean not null default false);');
    this.addSql('alter table "users" add constraint "users_email_unique" unique ("email");');
  }

}
