import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import "@fontsource/montserrat";

export default function Post() {
  return (
    <Box
      w={"343px"}
      h={"360px"}
      left={"0px"}
      top={"0px"}
      border={"2px solid #000000"}
    >
      {/* <Box position="relative" top="0px" w="339px" h="222px" bg="red"></Box> */}
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
        >
          <Box
            pos="absolute"
            w="24px"
            h="24px"
            left="calc(50% - 24px/2)"
            top="calc(50% - 24px/2)"
          >
            <Box
              pos="absolute"
              left="29.17%"
              right="29.17%"
              top="8.33%"
              bottom="8.33%"
              border="2px solid #000000"
              borderBottom="2px solid transparent"
              boxSizing="border-box"
            />
          </Box>
        </Box>
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
        <Text
          // fontFamily={"Montserrat"}
          fontStyle={"normal"}
          fontWeight={"900"}
          fontSize={"11px"}
          // lineHeight={"14px"}
          color={"#FFFFFF"}
        >
          HIP-HOP
        </Text>
      </Flex>
      <Text
        position="relative"
        width="319px"
        height="60px"
        top="210px"
        left="10px"
        fontWeight={900}
        fontSize="16px"
        letterSpacing="-0.04em"
        lineHeight="20px"
      >
        {"Poprzednia dekada nalezala do Drake`a. "}
        {"Jak Kanadyjczyk wplynal na muzyke popularna?"}
      </Text>
      <Box position="relative" w="148px" height="16px" top="206px" left="10px">
        <Text
          fontSize="12px"
          color="#1300E8"
          letterSpacing="-0.04em"
          fontWeight="800"
          lineHeight="16px"
        >
          Piotr Żelazny
        </Text>
      </Box>
    </Box>
  );
}
