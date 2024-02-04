import { Module } from '@nestjs/common';
import { MerchantAuthController } from './merchant/controllers/auth.controller';
import { MerchantAuthService } from './merchant/services/auth.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserEntity } from 'src/entities/users/users.entity';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MikroOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: env.JWT_SECRET_KEY,
      signOptions: { expiresIn: env.JWT_EXPIRED },
    }),
  ],
  controllers: [MerchantAuthController],
  providers: [MerchantAuthService, JwtStrategy],
})
export class AuthModule {}
