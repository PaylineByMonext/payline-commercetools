import {
  PaymentRequestSchemaDTO,
  NotificationRequestParamsDTO,
  NotificationRequestQueryDTO,
  ConfirmRequestQueryDTO,
} from '../../dtos/monext-payment.dto';
import { CommercetoolsCartService, CommercetoolsPaymentService } from '@commercetools/connect-payments-sdk';

export type MonextPaymentServiceOptions = {
  ctCartService: CommercetoolsCartService;
  ctPaymentService: CommercetoolsPaymentService;
};

export type CreatePaymentRequest = {
  data: PaymentRequestSchemaDTO;
};

export enum TransactionStates {
  SUCCESS = 'Success',
  FAILURE = 'Failure',
  PENDING = 'Pending',
  INITIAL = 'Initial',
}

export enum TransactionTypes {
  AUTHORIZATION = 'Authorization',
  CANCEL_AUTHORIZATION = 'CancelAuthorization',
  CHARGE = 'Charge',
  REFUND = 'Refund',
  CHARGE_BACK = 'Chargeback',
}

export enum MonextTransactionTypes {
  AUTHORIZATION = 'AUTHORIZATION',
  AUTHORIZATION_AND_CAPTURE = 'AUTHORIZATION_AND_CAPTURE',
  CANCEL = 'CANCEL_AUTHORIZATION',
  CAPTURE = 'CAPTURE',
  REFUND = 'REFUND',
  RESET = 'RESET',
}

export enum MonextTransactionStatus {
  OK = 'OK',
  KO = 'KO',
}

export type NotificationPaymentRequest = NotificationRequestParamsDTO & NotificationRequestQueryDTO;
export type ConfirmPaymentRequest = ConfirmRequestQueryDTO;
