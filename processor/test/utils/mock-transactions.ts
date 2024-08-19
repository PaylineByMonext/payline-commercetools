import { Payment } from '@commercetools/connect-payments-sdk';
import {
  MonextSessionDetails,
  MonextTransactionDetails,
  MonextTransactionResponse,
} from '../../src/clients/types/monext.client.type';

export const monextSessionAuthorizationResult: MonextSessionDetails = {
  result: {
    title: 'ACCEPTED',
    code: '00000',
    detail: 'Transaction approved',
  },
  transactions: [
    {
      id: 'transaction-1',
      date: '2024-06-20T18:46:33.000+00:00',
      type: 'AUTHORIZATION',
      paymentMethodId: '123459',
      requestedAmount: 2499,
      currency: 'EUR',
      paymentType: 'ONE_OFF',
      capture: 'MANUAL',
      paymentInstrumentData: {
        expirationDate: '1232',
        mxToken: '453257HqsBUj6017',
        maskedNumber: '453257XXXXXXXX17',
        network: 'CB',
        paymentInstrumentType: {
          code: 'CB',
        },
      },
      partnerReturnedData: {
        authorizationNumber: 'A55A',
        authorizationDate: '2024-06-20T18:46:33.000+00:00',
        issuerTransactionId: '000000572553866',
      },
    },
  ],
  order: {
    reference: 'cart-id-1',
    amount: 2499,
    currency: 'EUR',
    date: '2024-06-20T18:46:00.000+00:00',
    origin: 'E_COM',
    country: 'DE',
    items: [
      {
        reference: 'LCO-034',
        price: 2499,
        quantity: 1,
        comment: '',
        brand: '',
        category: '',
        subCategory1: '',
        subCategory2: '',
        taxRate: 2000,
        seller: '',
      },
    ],
  },
  buyer: {
    id: 'customer-id-1',
    legalStatus: 'PRIVATE',
    billingAddress: {
      streetNumber: '100',
      street: 'Main Road',
      city: 'Westminster',
      zip: 'SW1A2AA',
      country: 'GB',
      firstName: 'Jennifer',
      lastName: 'Jones',
    },
    firstName: 'Jennifer',
    lastName: 'Jones',
    email: 'jen@example.uk',
  },
  delivery: {
    address: {
      streetNumber: '100',
      street: 'Main Road',
      city: 'Westminster',
      zip: 'SW1A2AA',
      country: 'GB',
      firstName: 'Jennifer',
      lastName: 'Jones',
    },
  },
  privateData: {},
  device: {
    type: 'COMPUTER',
    operatingSystem: 'Ubuntu',
    ip: '192.168.1.1',
    browserUserAgent: 'Firefox 126',
    country: 'FR',
  },
};

export const monextTransactionAuthorizationResult: MonextTransactionDetails = {
  result: {
    title: 'ACCEPTED',
    code: '00000',
    detail: 'Transaction approved',
  },
  transaction: {
    id: 'transaction-1',
    date: '2024-06-20T18:46:33.000+00:00',
    type: 'AUTHORIZATION',
    paymentMethodId: '123459',
    requestedAmount: 2499,
    currency: 'EUR',
    paymentType: 'ONE_OFF',
    capture: 'MANUAL',
    paymentInstrumentData: {
      expirationDate: '1232',
      mxToken: '453257HqsBUj6017',
      maskedNumber: '453257XXXXXXXX17',
      network: 'CB',
      paymentInstrumentType: {
        code: 'CB',
      },
    },
    partnerReturnedData: {
      authorizationNumber: 'A55A',
      authorizationDate: '2024-06-20T18:46:33.000+00:00',
      issuerTransactionId: '000000572553866',
    },
  },
  order: {
    reference: 'cart-id-1',
    amount: 2499,
    currency: 'EUR',
    date: '2024-06-20T18:46:00.000+00:00',
    origin: 'E_COM',
    country: 'DE',
    items: [
      {
        reference: 'LCO-034',
        price: 2499,
        quantity: 1,
        comment: '',
        brand: '',
        category: '',
        subCategory1: '',
        subCategory2: '',
        taxRate: 2000,
        seller: '',
      },
    ],
  },
  buyer: {
    id: 'customer-id-1',
    legalStatus: 'PRIVATE',
    billingAddress: {
      streetNumber: '100',
      street: 'Main Road',
      city: 'Westminster',
      zip: 'SW1A2AA',
      country: 'GB',
      firstName: 'Jennifer',
      lastName: 'Jones',
    },
    firstName: 'Jennifer',
    lastName: 'Jones',
    email: 'jen@example.uk',
  },
  delivery: {
    address: {
      streetNumber: '100',
      street: 'Main Road',
      city: 'Westminster',
      zip: 'SW1A2AA',
      country: 'GB',
      firstName: 'Jennifer',
      lastName: 'Jones',
    },
  },
  privateData: {},
  associatedTransactions: [
    {
      id: 'transaction-1',
      type: 'AUTHORIZATION',
      date: '2024-07-04T12:22:54.000+00:00',
      amount: 2499,
      status: 'OK',
      originTransactionId: 'transaction-1',
    },
  ],
  device: {
    type: 'COMPUTER',
    operatingSystem: 'Ubuntu',
    ip: '192.168.1.1',
    browserUserAgent: 'Firefox 126',
    country: 'FR',
  },
};

export const monextTransactionCaptureResult: MonextTransactionDetails = {
  result: {
    title: 'ACCEPTED',
    code: '00000',
    detail: 'Transaction approved',
  },
  transaction: {
    id: 'transaction-1',
    date: '2024-06-20T18:46:33.000+00:00',
    type: 'AUTHORIZATION_AND_CAPTURE',
    paymentMethodId: '123459',
    requestedAmount: 2499,
    currency: 'EUR',
    paymentType: 'ONE_OFF',
    capture: 'AUTOMATIC',
    paymentInstrumentData: {
      expirationDate: '1232',
      mxToken: '453257HqsBUj6017',
      maskedNumber: '453257XXXXXXXX17',
      network: 'CB',
      paymentInstrumentType: {
        code: 'CB',
      },
    },
    partnerReturnedData: {
      authorizationNumber: 'A55A',
      authorizationDate: '2024-06-20T18:46:33.000+00:00',
      issuerTransactionId: '000000572553866',
    },
  },
  order: {
    reference: 'cart-id-1',
    amount: 2499,
    currency: 'EUR',
    date: '2024-06-20T18:46:00.000+00:00',
    origin: 'E_COM',
    country: 'DE',
    items: [
      {
        reference: 'LCO-034',
        price: 2499,
        quantity: 1,
        comment: '',
        brand: '',
        category: '',
        subCategory1: '',
        subCategory2: '',
        taxRate: 2000,
        seller: '',
      },
    ],
  },
  buyer: {
    id: 'customer-id-1',
    legalStatus: 'PRIVATE',
    billingAddress: {
      streetNumber: '100',
      street: 'Main Road',
      city: 'Westminster',
      zip: 'SW1A2AA',
      country: 'GB',
      firstName: 'Jennifer',
      lastName: 'Jones',
    },
    firstName: 'Jennifer',
    lastName: 'Jones',
    email: 'jen@example.uk',
  },
  delivery: {
    address: {
      streetNumber: '100',
      street: 'Main Road',
      city: 'Westminster',
      zip: 'SW1A2AA',
      country: 'GB',
      firstName: 'Jennifer',
      lastName: 'Jones',
    },
  },
  privateData: {},
  associatedTransactions: [
    {
      id: 'transaction-1',
      type: 'AUTHORIZATION_AND_CAPTURE',
      date: '2024-07-04T12:22:54.000+00:00',
      amount: 2499,
      status: 'OK',
      originTransactionId: 'transaction-1',
    },
  ],
  device: {
    type: 'COMPUTER',
    operatingSystem: 'Ubuntu',
    ip: '192.168.1.1',
    browserUserAgent: 'Firefox 126',
    country: 'FR',
  },
};

export const validAuthorizationResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 5,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:46:43.095Z',
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
      id: 'dummy-authorization-transaction',
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

export const validAuthorizationAndCaptureResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 5,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:46:43.095Z',
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
      state: 'Success',
    },
  ],
  interfaceInteractions: [],
};

export const validCaptureResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 5,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:46:43.095Z',
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
      id: 'dummy-authorization-transaction',
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
    {
      id: 'dummy-charge-transaction',
      timestamp: '2024-06-20T18:23:02.558Z',
      type: 'Charge',
      amount: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2499,
        fractionDigits: 2,
      },
      interactionId: 'Transaction-2',
      state: 'Success',
    },
  ],
  interfaceInteractions: [],
};

export const validCancelResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 5,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:46:43.095Z',
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
      id: 'dummy-authorization-transaction',
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
    {
      id: 'dummy-charge-transaction',
      timestamp: '2024-06-20T18:23:02.558Z',
      type: 'CancelAuthorization',
      amount: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2499,
        fractionDigits: 2,
      },
      interactionId: 'Transaction-2',
      state: 'Success',
    },
  ],
  interfaceInteractions: [],
};

export const validRefundResult: Payment = {
  id: '20354d7a-e4fe-47af-8ff6-187bca92f3f9',
  version: 5,
  createdAt: '2024-06-20T18:22:00.312Z',
  lastModifiedAt: '2024-06-20T18:46:43.095Z',
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
      state: 'Success',
    },
    {
      id: 'dummy-refund-transaction',
      timestamp: '2024-06-20T18:23:02.558Z',
      type: 'Refund',
      amount: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2499,
        fractionDigits: 2,
      },
      interactionId: 'Transaction-2',
      state: 'Success',
    },
  ],
  interfaceInteractions: [],
};

export const monextTransactionResult = (type: string): MonextTransactionResponse => {
  return {
    result: {
      title: 'ACCEPTED',
      code: '00000',
      detail: 'Transaction approved',
    },
    transaction: {
      id: 'Transaction-2',
      date: '2024-06-20T18:47:33.000+00:00',
      type,
    },
  };
};
