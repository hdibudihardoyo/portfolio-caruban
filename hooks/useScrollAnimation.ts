import { Variants } from "framer-motion";
import type { ScrollDirection } from "@/types/animation";

export function getScrollVariants(
  direction: ScrollDirection = "up",
  distance = 40,
  duration = 0.7
): Variants {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign = direction === "down" || direction === "right" ? -1 : 1;

  return {
    hidden: {
      opacity: 0,
      ...(axis === "x" ? { x: sign * distance } : { y: sign * distance }),
    },
    visible: {
      opacity: 1,
      ...(axis === "x" ? { x: 0 } : { y: 0 }),
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
}

export function getStaggerVariants(staggerDelay = 0.1): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };
}

export const scrollViewport = { once: true, amount: 0.12 } as const;
