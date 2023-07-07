import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post,Delete } from '@nestjs/common';
import { EmpDetailsService } from './emp_details.service';
import { EDTS } from 'src/entity/emp_details.entity';
import { Emp_DetailsDto } from './dto/emp_details.dto';

@Controller('emp_details')
export class EmpDetailsController {

    constructor (private service:EmpDetailsService){}


    @Get()
    async getallEmpdetail():Promise<EDTS[]>{
        return this.service.getEmpdetail();
    }

    @Get(':id')
    async getallempdetailById(@Param('id') id: number): Promise<EDTS> {
        return this.service.getEmpdetailbyid(id);
    }

    @Post()
    async createEmpdetail(@Body() emp_detailsdto: Emp_DetailsDto): Promise<EDTS> {
        return this.service.createEmpdetail(emp_detailsdto);
    }

    @Patch(':id')
    async updateEmpdetail(@Param('id') id: number, @Body() emp_detailsdto: Emp_DetailsDto): Promise<Array<EDTS>> {
        return this.service.updateEmpdetailbyid(id, emp_detailsdto)
    }

    @Delete(':id')
    async deleteEmpdetail(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
        return this.service.deleteEmpdetailbyid(id)
    }
    
 
}
