"use client";
import DashboardWrapper from "@/components/main-components/DashboardWrappers";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";

export default function DashboardLayout({
  children,
}) {
  const { theme } = useThemeContext();
  return (
      <ThemeProvider>
    <DashboardWrapper>
      {children}
    </DashboardWrapper>
    </ThemeProvider>

  );
}