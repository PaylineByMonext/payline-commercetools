import { BaseOptions } from "../components/base";
import { MonextBuilder } from "../components/payment-methods/monext/monext";
import {
  EnablerOptions,
  PaymentComponentBuilder,
  PaymentEnabler,
} from "./payment-enabler";

declare global {
  interface ImportMeta {
    env: any;
  }
}

export class MonextPaymentEnabler implements PaymentEnabler {
  setupData: Promise<{ baseOptions: BaseOptions }>;

  constructor(options: EnablerOptions) {
    this.setupData = MonextPaymentEnabler._Setup(options);
  }

  private static _Setup = async (
    options: EnablerOptions
  ): Promise<{ baseOptions: BaseOptions }> => {
    // Fetch SDK config from processor if needed, for example:

    // const configResponse = await fetch(instance.processorUrl + '/config', {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json', 'X-Session-Id': options.sessionId },
    // });

    // const configJson = await configResponse.json();

    return Promise.resolve({
      baseOptions: {
        processorUrl: options.processorUrl,
        sessionId: options.sessionId,
        locale: options.locale,
        onComplete: options.onComplete || (() => {}),
        onError: options.onError || (() => {}),
      },
    });
  };

  async createComponentBuilder(
    type: string
  ): Promise<PaymentComponentBuilder | never> {
    const { baseOptions } = await this.setupData;

    const supportedMethods = {
      monext: MonextBuilder,
    };

    if (!Object.keys(supportedMethods).includes(type)) {
      throw new Error(
        `Component type not supported: ${type}. Supported types: ${Object.keys(
          supportedMethods
        ).join(", ")}`
      );
    }

    return new supportedMethods[type](baseOptions);
  }
}
