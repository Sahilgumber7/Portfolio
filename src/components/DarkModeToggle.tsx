"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      className=" rounded-full hover:bg-transparent"
    >
      {theme === "dark" ? <SunIcon className="w-5 h-5  text-white" /> : <MoonIcon className="w-5 h-5 " />}
    </Button>
  );
}
