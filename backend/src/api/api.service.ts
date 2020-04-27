import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  ForbiddenException,
} from '@nestjs/common';
import axios from 'axios';
import * as HttpStatusCodes from 'http-status-codes';

import { ConfigService } from '../config/config.service';
import {
  TransactionQueryDto,
  TransactionEntity,
} from '../transactions/dto/transaction.dto';

@Injectable()
export class ApiService {
  private readonly endpoint = this.config.get<string>('api.endpoint');
  private readonly username = this.config.get<string>('api.username');
  private readonly password = this.config.get<string>('api.password');

  constructor(private readonly config: ConfigService) {}

    async getTransactions(
        params?: TransactionQueryDto,
      ): Promise<TransactionEntity[]> {
        try {
          const { data } = await axios.get(this.endpoint, {
            auth: {
              username: this.username,
              password: this.password,
            },
            params,
          });
          return data;
        } catch (e) {
          const { status, message } = e.response || e;
          switch (status) {
            case HttpStatusCodes.BAD_REQUEST:
              throw new BadRequestException('Invalid filters');
            case HttpStatusCodes.FORBIDDEN:
              throw new ForbiddenException('Invalid api credentials');
            default:
              throw new InternalServerErrorException(message);
          }
        }
      }
}
