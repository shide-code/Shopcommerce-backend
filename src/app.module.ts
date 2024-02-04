import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { FilesModule } from './modules/files/files.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { RolesModule } from './modules/roles/roles.module';
import { MerchantModule } from './modules/merchant/merchant.module';

@Module({
  imports: [MikroOrmModule.forRoot(), AuthModule, ProductModule, FilesModule, RolesModule, MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
