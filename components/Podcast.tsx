import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

type PodcastProps = {};

export default function Post(props: PodcastProps) {
  return (
    <Grid
      w={{ base: "343px", md: "800px" }}
      h={{ base: "148px", md: "168px" }}
      templateRows={{ base: "98px 1fr", md: "118px 1fr" }}
      templateColumns={{
        base: "48px 48px 1fr",
        md: "168px 1fr 48px 48px",
      }}
      gap={0.5}
      bg="#FFFFFF"
    >
      <GridItem
        colSpan={{ base: 2, md: "auto" }}
        rowSpan={{ base: "auto", md: 2 }}
        backgroundImage="/rudzki_ras.svg"
        backgroundSize="cover"
      >
        {/* <Image
          alt="Rihanna"
          src={"/rudzki_ras.svg"}
          width="100%"
          height="100%"
        /> */}
      </GridItem>
      <GridItem
        colStart={{ base: "auto", md: 2 }}
        colSpan={{ base: "auto", md: 3 }}
        bg="#000000"
      ></GridItem>
      <GridItem colStart={{ base: "auto", md: 2 }} bg="#000000" />
      <GridItem bg="#000000" />
      <GridItem bg="#000000" />
    </Grid>
  );
}
