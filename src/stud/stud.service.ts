import {  Injectable } from '@nestjs/common';
import { StudDto } from './dto/stud.dto';
import { SETS } from 'src/entity/stud.entity';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class StudService {


    constructor(@InjectModel(SETS) private studModel: typeof SETS) {
    }
    //to get a data by ID  // to GET a data in DB @get

    async getById(id: number): Promise<SETS> {

        return this.studModel.findByPk(id)
    }
    // // to PUT a data in DB

    // async putstud(studDto: StudDto): Promise<SETS> {
    //     return this.studModel.update(studDto)
      
    // }
    //  to POST a data in DB & to CREATE a data in DB @post

    async createStud(studDto: StudDto): Promise<SETS> {

        return this.studModel.create(studDto)
    }
    
    //to update a data and id @patch
    async updateStud(id: number, studDto: StudDto): Promise<Array<SETS>> {

       const nope= await  this.studModel.update(studDto, { where: { id }, returning: true });
       return nope[1];
    }

    //TO GET ALL STUD DATA @get
    async getAllStud(): Promise<SETS[]>
     {
        return this.studModel.findAll();
    }
    //TO DELETE  A DATA BY ID @delete
    async deleteStud(id: number): Promise<void> {
        const deletethis = await this.studModel.findByPk(id);
        deletethis.isDeleted = true;
        deletethis.deletedAt = new Date();
        deletethis.save(); 
    }
}
