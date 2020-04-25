import { ApiModelPropertyOptional, ApiResponseModelProperty } from "@nestjs/swagger";
import { IsOptional, IsEnum } from 'class-validator';

const actions = ['payment', 'credit', 'authorize'];
const currencies = ['EUR', 'USD', 'JPY', 'GBP'];

export class TransactionQueryDto {
    @ApiModelPropertyOptional({
        enum: actions,
    })
    @IsOptional()
    @IsEnum(actions)
    action?: string;

    @ApiModelPropertyOptional({
        enum: currencies,
    })
    @IsOptional()
    @IsEnum(currencies)
    currency?: string;
}


export class TransactionCardDto {
    @ApiResponseModelProperty()
    expiryMonth: string;

    @ApiResponseModelProperty()
    expiryYear: string;

    @ApiResponseModelProperty()
    firstSixDigits: string;

    @ApiResponseModelProperty()
    lastFourDigits: string;

    @ApiResponseModelProperty()
    holderName: string;
}

export class TransactionResponseDto {
    @ApiResponseModelProperty()
    id: string;

    @ApiResponseModelProperty()
    action: string;

    @ApiResponseModelProperty()
    amount: number;

    @ApiResponseModelProperty()
    brand: string;

    @ApiResponseModelProperty()
    brandId: string;

    @ApiResponseModelProperty()
    currencyCode: string;

    @ApiResponseModelProperty()
    trackingCode: string;

    @ApiResponseModelProperty({
        type: TransactionCardDto,
    })
    card: TransactionCardDto;
}

export class TransactionEntity {
    id: string;
    action: string;
    amount: number;
    brandId: string;
    currencyCode: string;
    trackingCode: string;
    card: TransactionCardDto;
}