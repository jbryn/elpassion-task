import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

type PodcastProps = {};

export default function Post(props: PodcastProps) {
  return (
    <Flex
      position="relative"
      direction={{ base: "column" }}
      w={{ base: "343px", md: "800px" }}
      h={{ base: "148px", md: "168px" }}
      left={"0px"}
      top={"0px"}
      //   border={"2px solid #000000"}
    >
      <Flex w="100%" h="66%" border={"2px solid #FFFFFF"}>
        <Box w="30%" h="100%" bg="black">
          {/* <Image
            alt="Rihanna"
            src={"/rudzki_ras.svg"}
            layout="fill"
            objectFit="cover"
          /> */}
        </Box>
      </Flex>
      <Flex w="100%" h="33%" border={"2px solid #FFFFFF"}>
        <Box w="15%" h="100%" bg="black"></Box>
      </Flex>
    </Flex>
  );
}
