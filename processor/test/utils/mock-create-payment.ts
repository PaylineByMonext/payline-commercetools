import { Payment } from '@commercetools/connect-payments-sdk';
import { type Customer, type ClientResponse } from '@commercetools/platform-sdk';
import { MonextSessionResponse } from '../../src/clients/types/monext.client.type';
import { mockGetCartResult } from './mock-cart-data';

export const mockGetPaymentResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 1,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:22:00.312Z',
  customer: {
    typeId: 'customer',
    id: 'customer-id-1',
  },
  amountPlanned: {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 2499,
    fractionDigits: 2,
  },
  paymentMethodInfo: {
    paymentInterface: 'monext',
  },
  paymentStatus: {},
  transactions: [],
  interfaceInteractions: [],
};

export const mockCartPagedQueryResult = (paymentId?: string) => {
  return {
    body: {
      limit: 20,
      offset: 0,
      count: 1,
      total: 1,
      results: [{ ...mockGetCartResult(paymentId) }],
    },
  };
};

export const mockUpdatePaymentResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 1,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:22:02.617Z',
  customer: {
    typeId: 'customer',
    id: 'customer-id-1',
  },
  interfaceId: 'monextToken1',
  amountPlanned: {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 2499,
    fractionDigits: 2,
  },
  paymentMethodInfo: {
    paymentInterface: 'monext',
    method: 'monext',
  },
  paymentStatus: {},
  transactions: [
    {
      id: 'dummy-charge-transaction',
      timestamp: '2024-06-20T18:22:02.558Z',
      type: 'Charge',
      amount: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2499,
        fractionDigits: 2,
      },
      interactionId: 'monextToken1',
      state: 'Initial',
    },
  ],
  interfaceInteractions: [],
};

export const mockAuthorizedPaymentResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 1,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:22:02.617Z',
  customer: {
    typeId: 'customer',
    id: 'customer-id-1',
  },
  interfaceId: 'monextToken1',
  amountPlanned: {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 2499,
    fractionDigits: 2,
  },
  paymentMethodInfo: {
    paymentInterface: 'monext',
    method: 'monext',
  },
  paymentStatus: {},
  transactions: [
    {
      id: 'dummy-charge-transaction',
      timestamp: '2024-06-20T18:22:02.558Z',
      type: 'Authorization',
      amount: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2499,
        fractionDigits: 2,
      },
      interactionId: 'monextToken1',
      state: 'Success',
    },
  ],
  interfaceInteractions: [],
};

export const mockGetPaymentCustomerResult: ClientResponse<Customer> = {
  body: {
    id: 'customer-id-1',
    version: 5,
    createdAt: '2024-05-13T07:29:46.572Z',
    lastModifiedAt: '2024-05-15T10:38:37.633Z',

    email: 'jen@example.uk',
    firstName: 'Jennifer',
    lastName: 'Jones',
    password: '****dhQ=',
    addresses: [
      {
        id: 'HAHwkukl',
        firstName: 'Jennifer',
        lastName: 'Jones',
        streetName: 'Main Road',
        streetNumber: '100',
        postalCode: 'SW1A2AA',
        city: 'Westminster',
        country: 'GB',
      },
    ],
    defaultShippingAddressId: 'HAHwkukl',
    defaultBillingAddressId: 'HAHwkukl',
    shippingAddressIds: ['HAHwkukl'],
    billingAddressIds: ['HAHwkukl'],
    isEmailVerified: true,
    key: 'jennifer-jones',
    stores: [],
    authenticationMode: 'Password',
  },
};

export const mockCreateMonextSessionResult: MonextSessionResponse = {
  result: {
    title: 'ACCEPTED',
    code: '00000',
    detail: 'Transaction approved',
    _HiTYC38zTcW: 544567317,
  },
  _Tm1UZe: null,
  sessionId: 'monextToken1',
  redirectURL: 'https://homologation-webpayment.payline.com/v2/?token=monextToken1',
};
