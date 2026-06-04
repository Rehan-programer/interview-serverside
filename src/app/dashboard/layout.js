import DashboardWrapper from "@/components/main-components/DashboardWrappers";
import { ThemeProvider, useThemeContext } from "@/context/ThemeContext";

export default function DashboardLayout({
  children,
}) {
  return (
      <ThemeProvider>
    <DashboardWrapper>
      {children}
    </DashboardWrapper>
    </ThemeProvider>

  );
}