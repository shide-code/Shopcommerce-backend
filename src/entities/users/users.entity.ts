import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
  Unique,
} from '@mikro-orm/core';
import { IsEmail } from 'class-validator';
import { BaseTableEntity } from '../base/base-table.entity';
import { UserRepository } from '../../repositories/users/user.repository';

@Entity({ repository: () => UserRepository, tableName: 'users' })
export class UserEntity extends BaseTableEntity {
  [EntityRepositoryType]?: UserRepository;
  @PrimaryKey()
  id: number;

  @Property({ type: 'varchar' })
  first_name: string;

  @Property({ type: 'varchar', nullable: true })
  last_name: string;

  @Property({ type: 'varchar', length: 255 })
  @Unique()
  @IsEmail()
  email: string;

  @Property({ type: 'text' })
  password: string;

  @Property({ type: 'boolean', default: false })
  is_active: boolean;

  @Property({ type: 'boolean', default: true })
  need_verification: boolean;

  @Property({ type: 'text', nullable: true })
  path_picture: string;

  @Property({ type: 'text', nullable: true })
  base_path: string;

  @Property({ type: 'boolean', default: false })
  is_forgot_password: boolean;
}
