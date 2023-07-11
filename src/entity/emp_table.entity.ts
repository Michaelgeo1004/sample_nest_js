import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "EmpTable" })
export class ETET extends Model<InferCreationAttributes<ETET>, InferAttributes<ETET>>{
    
    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @Column
    emp_code:number;

    @Column
    empName:string;

    @Column
    age:number;

    @Column
    location:string;

    @Column
    bloodGroup:string;

    @Column
    designation:string;

    @Column
    salary:number;

    @Column({defaultValue:false})
    isDeleted: boolean;

    @Column
    deletedAt: Date;


}
