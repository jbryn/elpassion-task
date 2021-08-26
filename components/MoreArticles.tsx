import { Box, Text } from "@chakra-ui/react";
import "@fontsource/montserrat/900.css";

export default function MoreArticles() {
  return (
    <Box
      pos="relative"
      w={{ base: "343px", md: "800px" }}
      h="48px"
      filter="drop-shadow(2px 2px 0px #000000)"
    >
      <Box
        pos="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        border="2px solid #000000"
        bg="#FFFFFF"
      >
        <Text
          pos="absolute"
          h="18px"
          left="2px"
          right="2px"
          top="calc(50% - 18px/2 + 1px)"
          fontFamily={"Montserrat"}
          fontSize="12px"
          lineHeight="18px"
          textAlign="center"
        >
          WIĘCEJ ARTYKUŁÓW
        </Text>
      </Box>
    </Box>
  );
}
