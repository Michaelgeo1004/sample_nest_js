import { Controller, Post, Get, Param, Body, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { EmpService } from './emp.service';
import { EmpDto } from './dto/emp.dto'
import { EETS } from 'src/entity/emp.entity';

@Controller('Emp')
export class EmpController {

    constructor(private service: EmpService) { }

    @Get()
    async getallEmp(): Promise<EETS[]> {
        return this.service.getallEmp();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<EETS> {
        return this.service.getById(id);
    }
    // @Get(':emp_code')
    // async getById(@Param('emp_code') emp_code: string): Promise<EETS> {
    //     return this.service.getById(emp_code);
    // }

    @Post()
    async createEmp(@Body() empDto: EmpDto): Promise<EETS> {
        return this.service.createEmp(empDto);
    }

    @Patch(':id')
    async updateEmp(@Param('id') id: number, @Body() empdto: EmpDto): Promise<Array<EETS>> {
        return this.service.updateEmp(id, empdto)
    }

    @Delete(':id')
    async deleteEmp(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
        return this.service.deleteEmp(id)
    }

}
