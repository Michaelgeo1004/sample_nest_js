import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import config from './config_db/config_db';
import { UsersModule } from './users/users.module';
import { StudModule } from './stud/stud.module';
import { AuthModule } from './auth/auth.module';
import { SecurityModule } from './security/security.module';
import { EmpModule } from './emp/emp.module';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [SequelizeModule.forRoot(config),UsersModule, StudModule, AuthModule, SecurityModule, EmpModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
