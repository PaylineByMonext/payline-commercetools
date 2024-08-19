import { config } from '../config/config';
import { ClientBuilder, type AuthMiddlewareOptions, type HttpMiddlewareOptions } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient, type ClientResponse, type Customer } from '@commercetools/platform-sdk';
import { log } from '../libs/logger';
import { CartPagedQueryResponse } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/cart';

const scopes = ['manage_customers:ct-monext', 'view_orders:ct-monext'];

export class CtpAPI {
  private authMiddlewareOptions: AuthMiddlewareOptions;
  private httpMiddlewareOptions: HttpMiddlewareOptions;
  private ctpClient;
  private apiRoot;

  constructor() {
    // Configure authMiddlewareOptions
    this.authMiddlewareOptions = {
      host: config.authUrl,
      projectKey: config.projectKey,
      credentials: {
        clientId: config.clientId,
        clientSecret: config.clientSecret,
      },
      scopes,
      fetch,
    };

    // Configure httpMiddlewareOptions
    this.httpMiddlewareOptions = {
      host: config.apiUrl,
      fetch,
    };

    this.ctpClient = new ClientBuilder()
      .withClientCredentialsFlow(this.authMiddlewareOptions)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .build();

    // Create apiRoot from the imported ClientBuilder and include your Project key
    this.apiRoot = createApiBuilderFromCtpClient(this.ctpClient).withProjectKey({
      projectKey: config.projectKey,
    });
  }

  // Export the ClientBuilder

  /**
   * Retrieves a customer by their ID.
   *
   * @param {string} customerId - The ID of the customer to retrieve.
   * @return {Promise<ClientResponse<Customer>>} A promise that resolves to the customer object.
   */
  public async getCustomerById(customerId: string): Promise<ClientResponse<Customer>> {
    return this.apiRoot.customers().withId({ ID: customerId }).get().execute();
  }

  /**
   * Retrieves a cart by its payment ID.
   *
   * @remarks
   * For queryArgs
   * See: https://docs.commercetools.com/api/predicates/query
   *
   * @param {string} paymentId - The ID of the payment associated with the cart.
   * @return {Promise<ClientResponse<CartPagedQueryResponse>>} A promise that resolves to the cart paged list object.
   */
  public async getCartByPaymentId(paymentId: string): Promise<ClientResponse<CartPagedQueryResponse>> {
    return this.apiRoot
      .carts()
      .get({
        queryArgs: {
          where: `paymentInfo(payments(typeId="payment"${paymentId ? ' and id="' + paymentId + '"' : ''}))`,
        },
      })
      .execute();
  }
}
