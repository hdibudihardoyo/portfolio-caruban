type ClassValue = string | undefined | null | false | Record<string, boolean>;

export function cn(...classes: ClassValue[]) {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === "string") return [cls];
      return Object.entries(cls)
        .filter(([, val]) => val)
        .map(([key]) => key);
    })
    .join(" ");
}