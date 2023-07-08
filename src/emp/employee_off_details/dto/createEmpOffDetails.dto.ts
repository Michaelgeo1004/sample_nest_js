import { EETS } from "src/entity/emp.entity";

export class createEmpOffDetailsDto
{
    id:number;
    emp_code:string;
    empOffdetail: EETS;
    designation:string;
    salary:Number;
    isDeleted:boolean;
    deletedAt:Date;
}