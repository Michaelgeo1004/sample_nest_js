import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post,Delete } from '@nestjs/common';
import { Emp_Off_DetailsDto } from './dto/emp_off_details.dto';
import { EODE } from 'src/entity/emp_off_details.entity';
import { EmpOffDetailService } from './emp_off_details.service';

@Controller('emp_off_details')
export class EmpOffDetailsController {

    constructor (private service:EmpOffDetailService){}


    @Get()
    async getallEmpOffdetail():Promise<EODE[]>{
        return this.service.getallEmpOffDetail();
    }

    @Get(':id')
    async getallempoffdetailById(@Param('id') id: number): Promise<EODE> {
        return this.service.getEmpOffDetailById(id);
    }

    @Post()
    async createEmpOffdetail(@Body() emp_off_detailsdto: Emp_Off_DetailsDto): Promise<EODE> {
        return this.service.createEmpOffDetail(emp_off_detailsdto);
    }

    @Patch(':id')
    async updateEmpOffdetail(@Param('id') id: number, @Body() emp_off_detailsdto: Emp_Off_DetailsDto): Promise<Array<EODE>> {
        return this.service.updateEmpOffDetail(id, emp_off_detailsdto)
    }

    @Delete(':id')
    async deleteEmpOffdetail(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
        return this.service.deleteEmpOffDetail(id)
    }
    
 
}
