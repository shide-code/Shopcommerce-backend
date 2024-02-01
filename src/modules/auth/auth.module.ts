import { Module } from '@nestjs/common';
import { MerchantAuthController } from './merchant/controllers/auth.controller';
import { MerchantAuthService } from './merchant/services/auth.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserEntity } from 'src/entities/users/users.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
  controllers: [MerchantAuthController],
  providers: [MerchantAuthService],
})
export class AuthModule {}
