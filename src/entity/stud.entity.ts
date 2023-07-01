import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";


@Table({ tableName: "AGD" })
export class SETS extends Model<InferCreationAttributes<SETS>, InferAttributes<SETS>>{
    
   
    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @Column
    Regno : number;

    @Column
    FirstName: string;

    @Column
    LastName: string;

    @Column({ defaultValue: false })
    isDeleted: boolean;

  

}