import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserAddressRepository } from '../../repositories/users/user-address.repository';
import { BaseTableEntity } from '../base/base-table.entity';

@Entity({ repository: () => UserAddressRepository, tableName: 'users_address' })
export class UserAddressEntity extends BaseTableEntity {
  [EntityRepositoryType]?: UserAddressRepository;

  @PrimaryKey()
  id: number;

  @Property()
  user_id: number;

  @Property({ type: 'text' })
  address: string;

  @Property({ type: 'varchar', nullable: true })
  province: string;

  @Property({ type: 'varchar', nullable: true })
  city: string;

  @Property({ type: 'varchar', nullable: true })
  district: string;

  @Property({ type: 'varchar', nullable: true })
  urban_village: string;

  @Property({ type: 'varchar', length: 32, nullable: true })
  phone_number: string;
}
