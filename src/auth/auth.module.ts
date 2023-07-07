import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SecurityModule } from 'src/security/security.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[SecurityModule]
})
export class AuthModule {}
