import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EDTS } from 'src/entity/emp_details.entity';
import { Emp_DetailsDto } from './dto/emp_details.dto';

@Injectable()
export class EmpDetailsService {
    

    constructor(@InjectModel (EDTS) private empdetailModel:typeof EDTS){}

//GeT    
    async getEmpdetail():Promise<EDTS []>{
        return this.empdetailModel.findAll();
    }
//PosT
    async createEmpdetail(emp_detailsDto:Emp_DetailsDto):Promise<EDTS>{
        return this.empdetailModel.create();
    }
//GeT by Id
    async getEmpdetailbyid(id:number):Promise<EDTS>{
        return this.empdetailModel.findByPk(id)
    }
//PatcH by Id
    async updateEmpdetailbyid(id:number,emp_detailsDto:Emp_DetailsDto):Promise<Array<EDTS>>{
        const dood=await this.empdetailModel.update(emp_detailsDto,{where:{id},returning:true});
        return dood[1];
    }
//Delete by Id
    async deleteEmpdetailbyid(id:number):Promise<void>{
        const deletethis=await this.empdetailModel.findByPk(id)
        deletethis.isDeleted=true;
        deletethis.deletedAt=new Date();
        deletethis.save ()
    }

    
}
