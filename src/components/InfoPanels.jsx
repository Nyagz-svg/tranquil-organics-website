import { CreditCard, RotateCcw, Truck } from "lucide-react";
import { businessInfo } from "../data/business.js";

export function DeliveryInfoPanel() {
  return (
    <article className="info-panel">
      <Truck size={20} />
      <h3>Delivery Information</h3>
      <p>{businessInfo.deliveryInfo}</p>
    </article>
  );
}

export function PaymentMethodsPanel({ checkout = false }) {
  const methods = checkout
    ? businessInfo.checkoutPaymentMethods
    : businessInfo.paymentMethods;

  return (
    <article className="info-panel">
      <CreditCard size={20} />
      <h3>Payment Methods</h3>
      <ul>
        {methods.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
    </article>
  );
}

export function ReturnsPolicyPanel() {
  return (
    <article className="info-panel">
      <RotateCcw size={20} />
      <h3>Returns Policy</h3>
      <p>{businessInfo.returnsPolicy}</p>
    </article>
  );
}
