"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('dark');
    } else {
      // Show an alert if the user tries to change the theme to something other than 'dark'
      alert("You can't change the theme. 'Dark' is the only theme available.");
    }
  };

  return (
    <div>
      <Button
        variant={"flat"}
        size="sm"
        asia-aria-label="Toggle Theme"
        className="mr-6"
        onClick={toggleTheme}
      >
        <Moon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon
          className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>
  );
}
