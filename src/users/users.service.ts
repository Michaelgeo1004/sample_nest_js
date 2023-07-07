import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/user.dto';
import { User } from 'src/entity/user.entity';

export type Users = any;
@Injectable()

export class UsersService 

{
     constructor(@InjectModel(User) private userModel: typeof User)
      {

    }

    async createUser(userDto: UserDto): Promise<User> {
        const createQuery = await this.userModel.create(userDto);
        return createQuery;
    }

    async getByIdUser(id: number): Promise<User> {
        const singleQuery = await this.userModel.findByPk(id);
        return singleQuery;
    }

    async getAllUser(): Promise<User[]>
     {
        return this.userModel.findAll();
    }
    // async getAllUser(): Promise<User[]> {
    //     return this.userModel.findAll({ where: { isDeleted: false } });
    // }

    async updateUser(id: number, userDto: UserDto): Promise<Array<User>> {
        const updateQuery = await this.userModel.update(userDto, { where: { id }, returning: true });
        return updateQuery[1];
    }

    async deleteUser(id: number): Promise<void> {
        const deleteQuary = await this.userModel.findByPk(id);
        deleteQuary.isDeleted = true;
        deleteQuary.deletedAt = new Date();
        deleteQuary.save();
    }

}
