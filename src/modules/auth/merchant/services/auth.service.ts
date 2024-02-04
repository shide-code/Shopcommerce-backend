import { Injectable } from '@nestjs/common';
import { RegisterMerchantDto } from '../dto/auth.dto';
import { UserRepository } from 'src/repositories/users/user.repository';
import { AppErrorException } from 'src/exceptions/app-exception';
import * as bcrypt from 'bcrypt';
import { saltOrRounds } from 'src/constant/saltOrRounds';
import { createSlug } from 'src/utils/slug';
import { MerchantDto } from 'src/modules/merchant/dto/merchant.dto';
import { EntityManager } from '@mikro-orm/core';
import { UserEntity } from 'src/entities/users/users.entity';
import { UserAddressEntity } from 'src/entities/users/user_address.entity';

@Injectable()
export class MerchantAuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly entityManager: EntityManager,
  ) {}

  async register(registerMerchantDto: RegisterMerchantDto) {
    registerMerchantDto.email = registerMerchantDto.email.toLowerCase();
    const merchantName = registerMerchantDto.merchant_name;
    const merchantSlug = createSlug(registerMerchantDto.merchant_name);
    const checkUser = await this.userRepository.findOne({
      email: registerMerchantDto.email.toLowerCase(),
    });
    if (checkUser) {
      throw new AppErrorException('Email is already in use');
    }
    const passwordHash = bcrypt.hashSync(
      registerMerchantDto.password,
      saltOrRounds,
    );
    registerMerchantDto.password = passwordHash;
    const data = await this.insertRegisterTransaction(registerMerchantDto);
    return { data };
    // } catch (error) {}
  }

  async insertRegisterTransaction(
    registerMerchantDto: RegisterMerchantDto,
    // merchantDto: MerchantDto,
  ) {
    try {
      await this.entityManager.transactional(async (em) => {
        const user = await em.insert(UserEntity, {
          first_name: registerMerchantDto.first_name,
          last_name: registerMerchantDto.last_name,
          email: registerMerchantDto.email,
          phone_number: registerMerchantDto.phone_number,
          password: registerMerchantDto.password,
          created_at: new Date(),
        });
        console.log(user);

        await em.insert(UserAddressEntity, {
          user_id: user,
          address: registerMerchantDto.address,
          province: registerMerchantDto.province,
          city: registerMerchantDto.city,
          district: registerMerchantDto.district,
          urban_village: registerMerchantDto.urban_village,
          phone_number: registerMerchantDto.phone_number,
          created_at: new Date(),
        });
      });

      return true;
    } catch (error) {
      console.log(error);

      throw new AppErrorException(error);
    }
  }
}
