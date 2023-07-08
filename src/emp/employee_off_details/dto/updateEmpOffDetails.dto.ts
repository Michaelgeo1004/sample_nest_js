import { EETS } from "src/entity/emp.entity";

export class updateEmpOffDetailsDto
{ 
    id:number;
    emp_code:string;
    empOffdetail: EETS;
    designation:string;
    salary:Number;
    isDeleted:boolean;
    deletedAt:Date;
}