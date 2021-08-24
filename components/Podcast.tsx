import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
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
      border={"2px solid #000000"}
    >
      <Grid
        h="200px"
        templateRows="2fr 1fr"
        templateColumns="1fr 1fr 6fr"
        gap={2}
      >
        <GridItem colSpan={2} bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
      </Grid>
      <Grid
        w="800px"
        h="168px"
        templateRows="118px 1fr"
        templateColumns="168px 1fr 48px 48px 48px"
        gap={1}
      >
        <GridItem rowSpan={2} bg="tomato" />
        <GridItem colStart={2} colSpan={3} bg="tomato" />
        <GridItem colStart={2} colSpan={1} bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
      </Grid>
    </Flex>
  );
}
