import { Injectable } from '@nestjs/common';
import { RegisterMerchantDto } from '../dto/auth.dto';
import { UserRepository } from 'src/repositories/users/user.repository';

@Injectable()
export class MerchantAuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async register(registerMerchantDto: RegisterMerchantDto) {
    // const data = await this.userRepository.insert(registerMerchantDto);
    return registerMerchantDto;
  }
}
