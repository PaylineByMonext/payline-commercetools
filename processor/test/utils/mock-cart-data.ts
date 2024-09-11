import { Cart, LineItem } from '@commercetools/connect-payments-sdk';

const lineItem: LineItem = {
  id: 'lineitem-id-1',
  productId: 'product-id-1',
  name: {
    en: 'lineitem-name-1',
  },
  productType: {
    id: 'product-type-reference-1',
    typeId: 'product-type',
  },
  price: {
    id: 'price-id-1',
    value: {
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: 2499,
      fractionDigits: 2,
    },
  },
  quantity: 1,
  totalPrice: {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 2499,
    fractionDigits: 2,
  },
  discountedPricePerQuantity: [],
  taxedPricePortions: [],
  state: [],
  perMethodTaxRate: [],
  priceMode: 'Platform',
  lineItemMode: 'Standard',
  variant: {
    id: 1,
    sku: 'LCO-034',
  },
};

export const mockGetCartResult = (paymentId?: string) => {
  const mockGetCartResult: Cart = {
    ...(paymentId && {
      paymentInfo: {
        payments: [
          {
            typeId: 'payment',
            id: paymentId,
          },
        ],
      },
    }),
    id: 'cart-id-1',
    version: 1,
    customerId: 'customer-id-1',
    customerEmail: 'jen@example.uk',
    lineItems: [lineItem],
    createdAt: '2024-06-20T21:25:26.965Z',
    lastModifiedAt: '2024-06-20T21:25:32.420Z',
    cartState: 'Active',
    totalPrice: {
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: 2499,
      fractionDigits: 2,
    },
    taxedPrice: {
      totalNet: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2082,
        fractionDigits: 2,
      },
      totalGross: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 2499,
        fractionDigits: 2,
      },
      taxPortions: [
        {
          rate: 0.2,
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 417,
            fractionDigits: 2,
          },
          name: 'Standard VAT for UK',
        },
      ],
      totalTax: {
        type: 'centPrecision',
        currencyCode: 'EUR',
        centAmount: 417,
        fractionDigits: 2,
      },
    },
    country: 'DE',
    shippingMode: 'Single',
    shippingAddress: {
      id: 'HAHwkukl',
      firstName: 'Jennifer',
      lastName: 'Jones',
      streetName: 'Main Road',
      streetNumber: '100',
      postalCode: 'SW1A2AA',
      city: 'Westminster',
      country: 'GB',
    },
    shipping: [],
    customLineItems: [],
    discountCodes: [],
    directDiscounts: [],
    inventoryMode: 'None',
    taxMode: 'Platform',
    taxRoundingMode: 'HalfEven',
    taxCalculationMode: 'LineItemLevel',
    deleteDaysAfterLastModification: 90,
    refusedGifts: [],
    origin: 'Customer',
    billingAddress: {
      id: 'HAHwkukl',
      firstName: 'Jennifer',
      lastName: 'Jones',
      streetName: 'Main Road',
      streetNumber: '100',
      postalCode: 'SW1A2AA',
      city: 'Westminster',
      country: 'GB',
    },
    itemShippingAddresses: [],
    store: {
      typeId: 'store',
      key: 'the-good-store',
    },
    totalLineItemQuantity: 1,
  };
  return mockGetCartResult;
};
