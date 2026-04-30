import { useState } from "react";
import { berbayarPlans, gratisPlans } from "@/constants";
import type { PricingPlan } from "@/types/pricing";

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
