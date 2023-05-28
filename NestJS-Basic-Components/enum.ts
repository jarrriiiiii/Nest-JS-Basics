//Enum feature is used when we have to choose limited states.
export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}






/////////////////


import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEnum } from "class-validator";


export enum Type{
    SaleQuotation = 'Sale Quotation',
    SaleOrder = 'Sale Order',
    PaymentPlan = 'Payment Plan',
    Brochure = 'Brochure',
    PostCreator = 'Post Creator'
}

export class CreateSaveAllPdfDto {


@ApiProperty()
@IsString()
@IsNotEmpty()
refId: string;



@IsString()
@IsNotEmpty()
@ApiProperty({ required: true })
@IsEnum([Type.SaleQuotation, Type.SaleOrder , Type.PaymentPlan, Type.Brochure,Type.PostCreator ])
status: string;


@ApiProperty()
@IsString()
@IsNotEmpty()
url: string;


}
