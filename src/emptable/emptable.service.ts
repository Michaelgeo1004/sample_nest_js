import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ETET } from 'src/entity/emp_table.entity';
import { emptabledto } from './dto/emptable.dto';

@Injectable()
export class EmptableService {
    constructor(@InjectModel(ETET) private emptableModel: typeof ETET) { }
//GeT
    async getallEmp(): Promise<ETET []> {
        return this.emptableModel.findAll();
    }
//GeT by Id
    async getById(id: number): Promise<ETET> {
        return this.emptableModel.findByPk(id);
    }
//PosT
    async createEmp(dto: emptabledto): Promise<ETET> {
        return this.emptableModel.create(dto);
    }
//PatcH by Id
    async updateEmp(id:number ,dto: emptabledto):Promise<Array<ETET>>{
        const dood=await this.emptableModel.update(dto,{where:{id},returning:true});
        return dood[1];
    }
//DeletE by Id
    async deleteEmp(id:number):Promise<void>{
        const deletethis =await this.emptableModel.findByPk(id)
        deletethis.isDeleted=true;
        deletethis.deletedAt=new Date();
        deletethis.save();
    }

}




