import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Emp_Off_DetailsDto } from './dto/emp_off_details.dto';
import { EODE } from 'src/entity/emp_off_details.entity';

@Injectable()
export class EmpOffDetailService {

    constructor(@InjectModel(EODE) private empoffdetailModel: typeof EODE) { }
//GeT
    async getallEmpOffDetail(): Promise<EODE []> {
        return this.empoffdetailModel.findAll({
            where:{
                isDeleted:false
            },
            // include:{association:{}}
        });
    }
//GeT by Id
    async getEmpOffDetailById(id: number): Promise<EODE> {
        return this.empoffdetailModel.findByPk(id);
    }
//PosT
    async createEmpOffDetail(empoffdetailDto: Emp_Off_DetailsDto): Promise<EODE> {
        return this.empoffdetailModel.create(empoffdetailDto);
    }
//PatcH by Id
    async updateEmpOffDetail(id:number ,empoffdetailDto:Emp_Off_DetailsDto):Promise<Array<EODE>>{
        const dood=await this.empoffdetailModel.update(empoffdetailDto,{where:{id},returning:true});
        return dood[1];
    }
//DeletE by Id
    async deleteEmpOffDetail(id:number):Promise<void>{
        const deletethis =await this.empoffdetailModel.findByPk(id)
        deletethis.isDeleted=true;
        deletethis.deletedAt=new Date();
        deletethis.save();
    }

}
