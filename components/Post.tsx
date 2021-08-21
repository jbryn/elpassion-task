import { Box, Flex } from "@chakra-ui/react";

export default function Post() {
  return (
    <Box
      w={"343px"}
      h={"356px"}
      left={"0px"}
      top={"0px"}
      border={"2px solid #000000"}
    >
      <Box
        position={"relative"}
        w={"339px"}
        h={"2px"}
        left={"0px"}
        top={"226px"}
        bg={"#000000"}
      />
      <Flex
        position={"relative"}
        alignItems={"center"}
        p={"4px 8px"}
        w={"73px"}
        h={"22px"}
        left={"10px"}
        top={"214px"}
        bg={"#1300E8"}
        border={"2px solid #000000"}
        boxSizing={"border-box"}
        boxShadow={"2px 2px 0px #000000"}
      />
    </Box>
  );
}
