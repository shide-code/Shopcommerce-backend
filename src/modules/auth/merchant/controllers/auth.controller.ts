import { Controller, Post, Body } from '@nestjs/common';
import { RegisterMerchantDto } from '../dto/auth.dto';
import { MerchantAuthService } from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('merchant/auth')
@Controller('merchant/auth')
// @ApiBearerAuth()
export class MerchantAuthController {
  constructor(private readonly merchantAuthService: MerchantAuthService) {}

  @Post('register')
  async register(@Body() registerMerchantDto: RegisterMerchantDto) {
    const data = await this.merchantAuthService.register(registerMerchantDto);
    return { data };
  }
}
