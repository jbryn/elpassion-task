import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import "@fontsource/montserrat";

type PostProps = {
  imageUrl: string;
};

export default function Post(props: PostProps) {
  const { imageUrl } = props;
  // const frameWidth = useBreakpointValue({ base: "343px", md: "800px" });
  return (
    //frame
    <Flex
      direction={{ base: "column", md: "row" }}
      w={{ base: "343px", md: "800px" }}
      h={{ base: "360px", md: "266px" }}
      left={"0px"}
      top={"0px"}
      border={"2px solid #000000"}
    >
      <Box
        pos="relative"
        w={{ base: "100%", md: "48%" }}
        h={{ base: "65%", md: "100%" }}
      >
        {/* spacer */}
        {/* <Box
          position="relative"
          width={{ base: "339px", md: "266px" }}
          height="2px"
          left={{ base: "0px", md: "251px" }}
          top={{ base: "232px", md: "130px" }}
          bg="black"
          transform={{ base: "none", md: "rotate(90deg)" }}
        /> */}
        <Image alt="Rihanna" src={imageUrl} layout="fill" objectFit="cover" />
      </Box>

      {/* <Flex
        position={"relative"}
        alignItems={"center"}
        p={"4px 8px"}
        w={"73px"}
        h={"22px"}
        left={{ base: "10px", md: "20px" }}
        top={{ base: "-13px", md: "220px" }}
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
      </Flex> */}
      <Box
        w={{ base: "100%", md: "52%" }}
        h={{ base: "35%", md: "100%" }}
        borderTop={{ base: "2px solid #000000", md: "none" }}
        borderLeft={{ base: "none", md: "2px solid #000000" }}
      >
        {/* <Text
          position="relative"
          width="319px"
          height="60px"
          top="0px"
          left="10px"
          fontWeight={900}
          fontSize="16px"
          letterSpacing="-0.04em"
          lineHeight="20px"
        >
          {"Poprzednia dekada nalezala do Drake`a. "}
          {"Jak Kanadyjczyk wplynal na muzyke popularna?"}
        </Text> */}
        {/* <Box position="relative" w="148px" height="16px" top="10px" left="10px">
          <Text
            fontSize="12px"
            color="#1300E8"
            letterSpacing="-0.04em"
            fontWeight="800"
            lineHeight="16px"
          >
            Piotr Żelazny
          </Text>
        </Box> */}
      </Box>

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
    </Flex>
  );
}
