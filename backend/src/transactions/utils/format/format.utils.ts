import { getCardBrand } from '../card-brand/card-brand.utils';
import {
  TransactionResponseDto,
  TransactionEntity,
} from '../../dto/transaction.dto';

export function transactionFormat(
  transaction: TransactionEntity,
): TransactionResponseDto {
  return {
    ...transaction,
    brand: getCardBrand(transaction.card.firstSixDigits),
  };
}
