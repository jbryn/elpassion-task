import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

type PodcastProps = {
  title: string;
  coverUrl: string;
};

export default function Post(props: PodcastProps) {
  const { title, coverUrl } = props;

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
        backgroundImage={coverUrl}
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
      <GridItem bg="#000000"></GridItem>
      <GridItem bg="#000000">
        <Box position="relative" w="48px" h="48px">
          <Box
            pos="absolute"
            left="0px"
            right="0px"
            top="0px"
            bottom="0px"
            bg="#000000"
            boxSizing="border-box"
          >
            <Box
              pos="absolute"
              w="24px"
              h="24px"
              left="calc(50% - 24px/2)"
              top="calc(50% - 24px/2)"
            >
              <Box
                h="20px"
                pos="absolute"
                left="29.17%"
                right="29.17%"
                top="8.33%"
                bottom="8.33%"
                boxSizing="border-box"
                backgroundImage="/bookmark2.svg"
              />
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
