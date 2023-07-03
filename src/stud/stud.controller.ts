import { Controller, Get, Put,  Post,  Body ,Param,  Patch, ParseIntPipe , Delete } from '@nestjs/common';
import { StudService } from './stud.service';
import { StudDto } from './dto/stud.dto';
import { SETS } from 'src/entity/stud.entity';

@Controller('Teddy')
export class StudController {
    constructor(private service: StudService) { }

    

    // @Put()
    //    async putstud(@Body() StudDto:StudDto):Promise<SETS> 
    //        {
    //    return this.service.putstud(StudDto);
    // }

    
    @Post()
    async createStud(@Body() studDto:StudDto):Promise<SETS>
    {
        return this.service.createStud(studDto)
    }

    @Get()
    async getAllStud(): Promise<SETS[]> {
        return this.service.getAllStud();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<SETS>
     {
        return this.service.getById(id);
    }

    @Patch(':id')
    async upadatestud(@Param('id') id: number, @Body() studDto: StudDto): Promise<Array<SETS>> 
    {
        // console.log(Array<SETS>);
        return this.service.updateStud(id, studDto);
    }
    
    @Delete(':id')
    
    async deleteStud(@Param('id',new ParseIntPipe()) id: number): Promise<void> {
        return this.service.deleteStud(id);
    }
 
}
