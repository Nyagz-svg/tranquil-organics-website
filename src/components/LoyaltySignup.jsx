import { useState } from "react";
import { loyaltyRewards } from "../data/siteContent.js";

export default function LoyaltySignup({ compact = false }) {
  const [joined, setJoined] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <section className={compact ? "loyalty-section compact" : "loyalty-section"}>
      <div className="loyalty-copy">
        <p className="eyebrow">Tranquil Circle</p>
        <h2>Get first access to new products, routine tips, exclusive offers, and customer rewards.</h2>
        <div className="loyalty-rewards">
          {loyaltyRewards.map((reward) => {
            const Icon = reward.icon;

            return (
              <span key={reward.title}>
                <Icon size={16} />
                {reward.title}
              </span>
            );
          })}
        </div>
      </div>

      <form className="loyalty-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Birthday optional
          <input name="birthday" type="date" />
        </label>
        <button type="submit" className="button primary">
          Join Tranquil Circle
        </button>
        {joined && (
          <p className="success-message">
            Welcome to the Tranquil Circle. Your first-order discount note is ready.
          </p>
        )}
      </form>
    </section>
  );
}
