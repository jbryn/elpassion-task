import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  breakpoints: createBreakpoints({
    sm: "30em",
    md: "58em",
    lg: "62em",
    xl: "80em",
  }),
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
  },
});
export default theme;
