import { trustBadges } from "../data/siteContent.js";

export default function TrustBadges({ compact = false }) {
  return (
    <div className={compact ? "trust-badges compact" : "trust-badges"}>
      {trustBadges.map((badge) => {
        const Icon = badge.icon;

        return (
          <span key={badge.label}>
            <Icon size={17} />
            {badge.label}
          </span>
        );
      })}
    </div>
  );
}
