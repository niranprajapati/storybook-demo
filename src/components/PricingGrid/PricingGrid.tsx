import { PricingCard, type PricingCardProps } from '../PricingCard/PricingCard';

export type PricingGridProps = {
  cards: PricingCardProps[];
};

export function PricingGrid({ cards }: PricingGridProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card) => (
        <PricingCard key={card.tier} {...card} />
      ))}
    </div>
  );
}
