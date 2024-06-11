import { Theme, useMediaQuery, useTheme } from "@mui/material";

export const useBreakpointUp = (
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl" = "sm"
): boolean => {
  const theme: Theme = useTheme();
  const matches: boolean = useMediaQuery(theme.breakpoints.up(breakpoint));
  return matches;
};

