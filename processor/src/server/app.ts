import { paymentSDK } from '../payment-sdk';
import { MonextPaymentService } from '../services/monext-payment.service';

const paymentService = new MonextPaymentService({
  ctCartService: paymentSDK.ctCartService,
  ctPaymentService: paymentSDK.ctPaymentService,
});

export const app = {
  services: {
    paymentService,
  },
};
