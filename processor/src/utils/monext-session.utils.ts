import { Labels, MonextItem, MonextPaymentType, MonextSession } from '../clients/types/monext.client.type';
import { config } from '../config/config';
import { Payment, Cart, LineItem, Customer } from '@commercetools/platform-sdk';
import { isValidJSON } from './global.utils';

/**
 * Maps line items to Monext items with specific properties.
 *
 * @param {LineItem[]} lineItems - The line items to be transformed.
 * @return {MonextItem[]} The transformed Monext items.
 */
const lineItemsToItems = (lineItems: LineItem[]): MonextItem[] => {
  return lineItems.map((item) => ({
    reference: item.variant.sku,
    price: item.totalPrice.centAmount,
    quantity: item.quantity,
    ...(item.taxRate && { taxRate: Math.floor(item.taxRate.amount * 10000) }),
  }));
};

/**
 * Generates a Monext session payload based on the provided payment, cart, and customer information.
 *
 * @param {Payment} payment - The payment information.
 * @param {Cart} cart - The cart information.
 * @param {Customer} customer - The customer information.
 * @param {string} [ctsid] - The Commercetools session ID.
 * @param {string} [processorURL] - The Commercetools processor URL.
 * @return {MonextSession} The generated Monext session payload.
 */
export const sessionPayload = (
  payment: Payment,
  cart: Cart,
  customer: Customer,
  ctsid?: string,
  processorURL?: string,
  languageCode?: string,
): MonextSession => {
  const items = lineItemsToItems(cart.lineItems);
  const pointOfSale = isValidJSON(config.monextPointOfSaleRef)
    ? cart.store && JSON.parse(config.monextPointOfSaleRef)[cart.store.key]
    : config.monextPointOfSaleRef;
  const captureMethod = isValidJSON(config.monextCaptureType)
    ? cart.store && JSON.parse(config.monextCaptureType)[cart.store.key]
    : config.monextCaptureType;
  const payload = {
    pointOfSaleReference: pointOfSale,
    returnURL: `${processorURL}/return?paymentReference=${payment.id}&ctsid=${ctsid}`,
    notificationURL: `${processorURL}/notification/${payment.id}?ctsid=${ctsid}`,
    languageCode: languageCode || Labels.EN_LANG,
    order: {
      reference: cart.id,
      amount: cart.totalPrice.centAmount,
      ...(cart.discountOnTotalPrice && { discount: cart.discountOnTotalPrice.discountedAmount }),
      currency: cart.totalPrice.currencyCode,
      origin: 'E_COM',
      country: cart.country,
      items,
    },
    payment: {
      paymentType: MonextPaymentType.ONE_OFF,
      capture: captureMethod,
      amount: payment.amountPlanned.centAmount,
    },
    buyer: {
      id: customer.id,
      ...((customer.title || customer.salutation) && {
        title: customer.title ? customer.title : customer.salutation,
      }),
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      birthDate: customer.dateOfBirth,
      legalStatus: 'PRIVATE',
      ...(cart.billingAddress && {
        billingAddress: {
          ...((cart.billingAddress.title || cart.billingAddress.salutation) && {
            title: cart.billingAddress.title ? cart.billingAddress.title : cart.billingAddress.salutation,
          }),
          firstName: cart.billingAddress.firstName,
          lastName: cart.billingAddress.lastName,
          email: cart.billingAddress.email,
          mobile: cart.billingAddress.mobile,
          streetNumber: cart.billingAddress.streetNumber,
          street: cart.billingAddress.streetName,
          complement: cart.billingAddress.additionalStreetInfo,
          city: cart.billingAddress.city,
          zip: cart.billingAddress.postalCode,
          country: cart.billingAddress.country,
        },
      }),
    },
    delivery: {
      ...(cart.shippingInfo && {
        charge: cart.shippingInfo.price.centAmount,
        provider: cart.shippingInfo.shippingMethodName,
      }),
      ...(cart.shippingAddress && {
        address: {
          ...((cart.shippingAddress.title || cart.shippingAddress.salutation) && {
            title: cart.shippingAddress.title ? cart.shippingAddress.title : cart.shippingAddress.salutation,
          }),
          firstName: cart.shippingAddress.firstName,
          lastName: cart.shippingAddress.lastName,
          email: cart.shippingAddress.email,
          mobile: cart.shippingAddress.mobile,
          streetNumber: cart.shippingAddress.streetNumber,
          street: cart.shippingAddress.streetName,
          complement: cart.shippingAddress.additionalStreetInfo,
          city: cart.shippingAddress.city,
          zip: cart.shippingAddress.postalCode,
          country: cart.shippingAddress.country,
        },
      }),
    },
    privateData: {
      commercetoolsPaymentID: payment.id,
    },
  };
  return payload as MonextSession;
};
