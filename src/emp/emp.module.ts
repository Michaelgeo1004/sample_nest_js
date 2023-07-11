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
import { ETET } from 'src/entity/emp_table.entity';
import { EmptableService } from 'src/emptable/emptable.service';
import { EmptableController } from 'src/emptable/emptable.controller';


@Module({
  providers: [EmpService, EmpOffDetailService,EmpDetailsService,EmptableService],
  controllers: [EmpController,EmpDetailsController, EmpOffDetailsController,EmptableController],
  imports:[SequelizeModule.forFeature([EDTS,EODE,EETS,ETET])]

})
export class EmpModule {}
