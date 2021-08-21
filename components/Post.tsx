import { Box, Flex, Text } from "@chakra-ui/react";
import "@fontsource/montserrat";

export default function Post() {
  return (
    <Flex position="absolute" direction="column" alignItems="center" p="2px">
      <Box
        w={"343px"}
        h={"356px"}
        left={"0px"}
        top={"0px"}
        border={"2px solid #000000"}
      >
        <Box position="absolute" w="48px" h="48px" right="0px" top="0px">
          <Box
            pos="absolute"
            left="0px"
            right="0px"
            top="0px"
            bottom="0px"
            bg="#FFFFFF"
            border={"2px solid #000000"}
            boxSizing="border-box"
            boxShadow="2px 2px 0px #000000"
          ></Box>
        </Box>
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
        >
          {/* <Box h="14px">
          <Text
            fontFamily={"Montserrat"}
            fontStyle={"normal"}
            fontWeight={"900"}
            fontSize={"12px"}
            // lineHeight={"14px"}
            color={"#FFFFFF"}
          >
            HIP-HOP
          </Text>
        </Box> */}
        </Flex>
      </Box>
    </Flex>
  );
}
