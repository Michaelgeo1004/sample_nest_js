import { InferAttributes, InferCreationAttributes } from "sequelize";
import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { EDTS } from "./emp_details.entity";
import { EODE } from "./emp_off_details.entity";

@Table({ tableName: "Employees" })
export class EETS extends Model<InferCreationAttributes<EETS>, InferAttributes<EETS>>{


    @Column({ autoIncrement: true, primaryKey: true })
    id: number;

    @HasMany(() => EDTS, { as: 'empdetail' })
    empDetail: EDTS[];

    @HasMany(() => EODE, { as: 'empoffdetail' })
    empOff: EODE[];

    @Column({ primaryKey: true })
    emp_code: string;

    @Column
    empName: string;

    @Column({defaultValue:false})
    isDeleted: boolean;

    @Column
    deletedAt: Date;
}