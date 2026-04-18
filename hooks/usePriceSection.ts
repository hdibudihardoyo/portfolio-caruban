import { useState } from "react";
import { berbayarPlans, gratisPlans, type PricingPlan } from "@/constants";

export function usePriceSection() {
  const [active, setActive] = useState<"gratis" | "berbayar">("gratis");
  const plans: PricingPlan[] =
    active === "gratis" ? gratisPlans : berbayarPlans;

  return {
    active,
    setActive,
    plans,
  };
}
