import { EntityRepository } from '@mikro-orm/postgresql';
import { UserAddressEntity } from 'src/entities/users/user_address.entity';

export class UserAddressRepository extends EntityRepository<UserAddressEntity> {}
