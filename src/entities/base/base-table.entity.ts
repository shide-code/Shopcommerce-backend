import { Property } from '@mikro-orm/core';

export class BaseTableEntity {
  @Property({ type: 'int', nullable: true })
  created_by: number;

  @Property({ type: 'int', nullable: true })
  updated_by: number;

  @Property({ type: 'int', nullable: true })
  deleted_by: number;

  @Property()
  created_at = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true })
  updated_at = new Date();

  @Property({ nullable: true })
  deleted_at = new Date();
}
