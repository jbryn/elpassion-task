import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import "@fontsource/montserrat";

type PostProps = {
  imageUrl: string;
  tagName: string;
  title: string;
  author: string;
  createdAt: string;
};

export default function Post(props: PostProps) {
  const { imageUrl, tagName, title, author, createdAt } = props;
  const [isLargerThan30em] = useMediaQuery("(min-width: 58em)");
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
        <Image alt="Rihanna" src={imageUrl} layout="fill" objectFit="cover" />

        <Flex
          position={"relative"}
          alignItems={"center"}
          p={"4px 8px"}
          w={"73px"}
          h={"22px"}
          left={{ base: "10px", md: "400px" }}
          top={{ base: "222px", md: "220px" }}
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
            {tagName}
          </Text>
        </Flex>
      </Box>
      <Box
        w={{ base: "100%", md: "52%" }}
        h={{ base: "35%", md: "100%" }}
        borderTop={{ base: "2px solid #000000", md: "none" }}
        borderLeft={{ base: "none", md: "2px solid #000000" }}
      >
        {isLargerThan30em ? (
          <Box
            position="relative"
            w="100%"
            h="46px"
            borderBottom="2px solid #000000"
          ></Box>
        ) : (
          <div></div>
        )}
        <Text
          position="relative"
          width={{ base: "319px", md: "350px" }}
          height="60px"
          top="20px"
          left="10px"
          fontWeight={900}
          fontSize={{ base: "16px", md: "24px" }}
          letterSpacing={{ base: "-0.04em", md: "-0.01em" }}
          lineHeight={{ base: "20px", md: "28px" }}
        >
          {"Poprzednia dekada nalezala do Drake`a. "}
          {"Jak Kanadyjczyk wplynal na muzyke popularna?"}
        </Text>
        <Flex
          position="relative"
          w="100%"
          height="16px"
          top="33px"
          left="10px"
          fontSize="12px"
        >
          <Text
            color="#1300E8"
            letterSpacing="-0.04em"
            fontWeight="800"
            lineHeight="16px"
          >
            {author}
          </Text>
          <Text color="#757575" marginLeft="2">
            {createdAt}
          </Text>
        </Flex>
      </Box>

      <Box position="absolute" w="48px" h="48px" right="1px" top="2px">
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
