import { useState } from "react";

export function useNavbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (key: string) => {
    setActive(key);
    setMenuOpen(false);
  };

  return {
    active,
    setActive,
    menuOpen,
    setMenuOpen,
    handleNavClick,
  };
}
