import { InferCreationAttributes ,InferAttributes } from "sequelize"
import { Column, Model, Table } from "sequelize-typescript"

@Table ({tableName:"Emp_Office_Detail"})
export class EODE extends Model <InferCreationAttributes<EODE>,InferAttributes<EODE>>{

    @Column ({autoIncrement:true ,primaryKey:true})
    id:number

    @Column
    Emp_id:string  

    @Column
    Designation:string

    @Column
    Salary:Number
    isDeleted: boolean


} 