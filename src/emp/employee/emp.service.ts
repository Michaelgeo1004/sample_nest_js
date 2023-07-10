import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EETS } from 'src/entity/emp.entity';
import { EmpDto } from './dto/emp.dto';


@Injectable()
export class EmpService {

    constructor(@InjectModel(EETS) private empModel: typeof EETS) { }
//GeT
    async getallEmp(): Promise<EETS []> {
        return this.empModel.findAll(
            {
                include:[{association:'empdetail'},{ association:'empoffdetail'}]

        });
    }
//GeT by Id
    async getById(id: number): Promise<EETS> {
        return this.empModel.findByPk(id);
    }
//PosT
    async createEmp(empDto: EmpDto): Promise<EETS> {
        return this.empModel.create(empDto);
    }
//PatcH by Id
    async updateEmp(id:number ,empDto:EmpDto):Promise<Array<EETS>>{
        const dood=await this.empModel.update(empDto,{where:{id},returning:true});
        return dood[1];
    }
//DeletE by Id
    async deleteEmp(id:number):Promise<void>{
        const deletethis =await this.empModel.findByPk(id)
        deletethis.isDeleted=true;
        deletethis.deletedAt=new Date();
        deletethis.save();
    }

}
