import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { MerchantRepository } from '../../repositories/merchant/merchant.repository';
import { BaseTableEntity } from '../base/base-table.entity';

@Entity({ repository: () => MerchantRepository, tableName: 'merchant' })
export class MerchantEntity extends BaseTableEntity {
  [EntityRepositoryType]?: MerchantRepository;

  @PrimaryKey()
  id: number;

  @Property({ type: 'int' })
  user_id: number;

  @Property({ type: 'varchar' })
  name: string;

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

  @Property({ type: 'varchar', length: 32 })
  phone_number: string;
}
