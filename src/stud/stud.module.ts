import { Module } from '@nestjs/common';
import { StudController } from './stud.controller';
import { StudService } from './stud.service';
import { SETS } from 'src/entity/stud.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [StudController],
  providers: [StudService],
  imports :[SequelizeModule.forFeature([SETS])]
})
export class StudModule {}
