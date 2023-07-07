import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

import { UserDto } from './dto/user.dto';
import { User } from 'src/entity/user.entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) {

    }

    // @Post()
    // async createUser(@Body() userDto: UserDto): Promise<User> {
    //     return this.service.createUser(userDto);
    // }

    // @Delete(':id')
    
    // async deleteUser(@Param('id',new ParseIntPipe()) id: number): Promise<void> {
    //     return this.service.deleteUser(id);
    // }

    // @Get(':id')
    // async getByIDUser(@Param('id') id: number): Promise<User> {
    //     return this.service.getByIdUser(id);
    // }

    // @Get()
    // async getAllUser(): Promise<User[]> {
    //     return this.service.getAllUser();
    // }

    // @Patch(':id')
    // async upadateUser(@Param('id') id: number, @Body() userDto: UserDto): Promise<Array<User>> {
    //     return this.service.updateUser(id, userDto);
    // }



}
