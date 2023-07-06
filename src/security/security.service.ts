import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type security = any;

@Injectable()
export class SecurityService {
  private  users = [
    {
      userId: 1,
      username: 'john',
      password: 'john',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'maria',
    },
  ];

  async findOne(username: string): Promise<security | undefined> {
    return this.users.find(user => user.username === username);
  }
}
