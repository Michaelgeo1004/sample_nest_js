import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/entity/user.entity';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[SequelizeModule.forFeature([User])]

})
export class UsersModule {}
