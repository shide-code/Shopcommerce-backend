import { EntityRepository } from '@mikro-orm/postgresql';
import { UserEntity } from 'src/entities/users/users.entity';

export class UserRepository extends EntityRepository<UserEntity> {}
