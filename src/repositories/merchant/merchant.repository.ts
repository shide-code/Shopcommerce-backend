import { EntityRepository } from '@mikro-orm/postgresql';
import { MerchantEntity } from 'src/entities/merchant/merchant.entity';

export class MerchantRepository extends EntityRepository<MerchantEntity> {}
