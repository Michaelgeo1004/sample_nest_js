import { Body, Controller, Get, Param, ParseIntPipe, Patch ,Post,Delete} from '@nestjs/common';
import { EmptableService } from './emptable.service';
import { ETET } from 'src/entity/emp_table.entity';
import { emptabledto } from './dto/emptable.dto';

@Controller('emptable')
export class EmptableController {

    constructor(private service: EmptableService) { }

    @Get()
    async getallEmp(): Promise<ETET[]> {
        return this.service.getallEmp();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<ETET> {
        return this.service.getById(id);
    }
    // @Get(':emp_code')
    // async getById(@Param('emp_code') emp_code: string): Promise<EETS> {
    //     return this.service.getById(emp_code);
    // }

    @Post()
    async createEmp(@Body() dto: emptabledto): Promise<ETET> {
        return this.service.createEmp(dto);
    }

    @Patch(':id')
    async updateEmp(@Param('id') id: number, @Body() dto: emptabledto): Promise<Array<ETET>> {
        return this.service.updateEmp(id, dto)
    }

    @Delete(':id')
    async deleteEmp(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
        return this.service.deleteEmp(id)
    }

}

