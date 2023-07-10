import { InferCreationAttributes ,InferAttributes } from "sequelize"
import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript"
import { EETS } from "./emp.entity";

@Table ({tableName:"Emp_Office_Detail"})
export class EODE extends Model <InferCreationAttributes<EODE>,InferAttributes<EODE>>{

    @Column ({autoIncrement:true ,primaryKey:true})
    id:number

    // @ForeignKey(() => EETS)
    // emp_id:number;

    @ForeignKey(() => EETS)
    emp_code:string;


    @BelongsTo(() => EETS)
    empOffdetail: EETS;

    @Column
    designation:string

    @Column
    salary:Number


    @Column({defaultValue:false})
    isDeleted: boolean;

    @Column
    deletedAt: Date;


} 