import {
  Box,
  Flex,
  Text,
  Grid,
  GridItem,
  Square,
  useBreakpointValue,
} from "@chakra-ui/react";
import Icon from "../components/Icon";

type PodcastProps = {
  title: string;
  coverUrl: string;
};

export default function Post(props: PodcastProps) {
  const { title, coverUrl } = props;
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

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
      ></GridItem>
      <GridItem
        colStart={{ base: "auto", md: 2 }}
        colSpan={{ base: "auto", md: 3 }}
        bg="#000000"
      ></GridItem>

      <GridItem colStart={{ base: "auto", md: 2 }} bg="#000000">
        {breakpoint === "base" && <Icon iconUrl="/playbutton.svg" />}
      </GridItem>
      <GridItem bg="#000000">
        {breakpoint === "md" ? (
          <Icon iconUrl="/playbutton.svg" />
        ) : (
          <Icon iconUrl="/bookmark2.svg" />
        )}
      </GridItem>
      <GridItem bg="#000000">
        {breakpoint === "md" && <Icon iconUrl="/bookmark2.svg" />}
      </GridItem>
    </Grid>
  );
}
