import { InferCreationAttributes ,InferAttributes } from "sequelize"
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { EETS } from "./emp.entity";

@Table ({tableName:"Emp_Office_Detail"})
export class EODE extends Model <InferCreationAttributes<EODE>,InferAttributes<EODE>>{

    @Column ({autoIncrement:true ,primaryKey:true})
    id:number

    @ForeignKey(() => EETS)

    @Column({allowNull: false, unique: true })
    Emp_id: number;  

    @BelongsTo(() => EETS)
    empdetail: EETS;

    @Column
    Designation:string

    @Column
    Salary:Number
    isDeleted: boolean


} 