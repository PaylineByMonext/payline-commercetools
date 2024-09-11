import { FastifyInstance } from 'fastify';
import { paymentSDK } from '../../payment-sdk';
import { paymentRoutes } from '../../routes/monext-payment.route';
import { MonextPaymentService } from '../../services/monext-payment.service';

export default async function (server: FastifyInstance) {
  const monextPaymentService = new MonextPaymentService({
    ctCartService: paymentSDK.ctCartService,
    ctPaymentService: paymentSDK.ctPaymentService,
  });

  await server.register(paymentRoutes, {
    paymentService: monextPaymentService,
    jwtAuthHook: paymentSDK.jwtAuthHookFn,
    sessionHeaderAuthHook: paymentSDK.sessionHeaderAuthHookFn,
    SessionQueryParamHook: paymentSDK.sessionQueryParamAuthHookFn,
  });
}
