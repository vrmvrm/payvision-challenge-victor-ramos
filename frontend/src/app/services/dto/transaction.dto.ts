export class TransactionQueryDto {
  action?: string;
  currencyCode?: string;
}

export class TransactionCardDto {
  expiryMonth: string;
  expiryYear: string;
  firstSixDigits: string;
  lastFourDigits: string;
  holderName: string;
}

export class TransactionResponseDto {
  id: string;
  action: string;
  amount: number;
  brand: string;
  brandId: string;
  currencyCode: string;
  trackingCode: string;
  card: TransactionCardDto;
}
