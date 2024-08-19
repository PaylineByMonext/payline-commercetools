import {
  ComponentOptions,
  PaymentComponent,
  PaymentComponentBuilder,
  PaymentMethod,
} from "../../../payment-enabler/payment-enabler";
import { BaseComponent, BaseOptions } from "../../base";
import styles from "../../../style/style.module.scss";
import buttonStyles from "../../../style/button.module.scss";

export class MonextBuilder implements PaymentComponentBuilder {
  public componentHasSubmit = true;
  constructor(private baseOptions: BaseOptions) {}

  build(config: ComponentOptions): PaymentComponent {
    return new Monext(this.baseOptions, config);
  }
}

export class Monext extends BaseComponent {
  private showPayButton: boolean;

  constructor(baseOptions: BaseOptions, componentOptions: ComponentOptions) {
    super(PaymentMethod.monext, baseOptions, componentOptions);
    this.showPayButton = componentOptions?.showPayButton ?? false;
  }

  mount(selector: string) {
    document
      .querySelector(selector)
      .insertAdjacentHTML("afterbegin", this._getTemplate());

    if (this.showPayButton) {
      document
        .querySelector("#monextForm-paymentButton")
        .addEventListener("click", (e) => {
          e.preventDefault();
          this.submit();
        });
    }
  }

  async submit() {
    try {
      const requestData = {
        paymentMethod: this.paymentMethod,
        languageCode: this.locale,
      };
      const response = await fetch(this.processorUrl + "/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Session-Id": this.sessionId,
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      if (data.redirectURL) {
        window.location.replace(data.redirectURL);
      } else {
        this.onError("Some error occurred. Please try again.");
      }
    } catch (e) {
      this.onError("Some error occurred. Please try again.");
    }
  }

  private _getTemplate() {
    return this.showPayButton
      ? `
    <div class="${styles.wrapper}">
      <p>Monext payment button.</p>
      <button class="${buttonStyles.button} ${buttonStyles.fullWidth} ${styles.submitButton}" id="monextForm-paymentButton">Pay with monext</button>
    </div>
    `
      : "";
  }
}
