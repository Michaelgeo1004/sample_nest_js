import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EODE } from 'src/entity/emp_off_details.entity';
import { EDTS } from 'src/entity/emp_details.entity';
import { EETS } from 'src/entity/emp.entity';
import { EmpService } from './employee/emp.service';
import { EmpController } from './employee/emp.controller';
import { EmpDetailsService } from './employee_details/emp_details.service';
import { EmpDetailsController } from './employee_details/emp_details.controller';
import { EmpOffDetailService } from './employee_off_details/emp_off_details.service';
import { EmpOffDetailsController } from './employee_off_details/emp_off_details.controller';


@Module({
  providers: [EmpService, EmpOffDetailService,EmpDetailsService],
  controllers: [EmpController,EmpDetailsController, EmpOffDetailsController],
  imports:[SequelizeModule.forFeature([EDTS,EODE,EETS])]

})
export class EmpModule {}
