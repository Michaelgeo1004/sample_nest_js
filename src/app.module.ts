import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import config from './config_db/config_db';
import { UsersModule } from './users/users.module';
import { StudModule } from './stud/stud.module';

@Module({
  imports: [SequelizeModule.forRoot(config),UsersModule, StudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
