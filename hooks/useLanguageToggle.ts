import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { locale: "en", label: "English", flag: "🇺🇸" },
  { locale: "id", label: "Indonesia", flag: "🇮🇩" },
];

export function useLanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSwitch = (newLocale: string) => {
    setOpen(false);
    if (newLocale === locale) return;

    document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    locale,
    open,
    setOpen,
    ref,
    languages,
    handleSwitch,
  };
}
