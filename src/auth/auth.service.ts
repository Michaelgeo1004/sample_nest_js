import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SecurityService } from 'src/security/security.service';

@Injectable()
export class AuthService {
  constructor(private securityservice: SecurityService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.securityservice.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}