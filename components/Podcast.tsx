import { Text, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Icon from "../components/Icon";

type PodcastProps = {
  title: string;
  subtitle: string;
  coverUrl: string;
};

export default function Post(props: PodcastProps) {
  const { title, subtitle, coverUrl } = props;
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

  return (
    <Grid
      position="relative"
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
      />
      <GridItem
        pos="relative"
        colStart={{ base: "auto", md: 2 }}
        colSpan={{ base: "auto", md: 3 }}
        bg="#000000"
      >
        <Text
          pos="absolute"
          w={{ base: "219px", md: "250px" }}
          h="16px"
          left="12px"
          right="12px"
          top="12px"
          fontSize={{ base: "12px", md: "14px" }}
          lineHeight={{ base: "16px", md: "20px" }}
          letterSpacing={{ base: "-0.03em", md: "-0.015em" }}
          color="#FFFFFF"
        >
          {title}
        </Text>
        <Text
          pos="absolute"
          w={{ base: "200px", md: "579px" }}
          h="60px"
          left="12px"
          right="12px"
          top={{ base: "32px", md: "36px" }}
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight="900"
          lineHeight={{ base: "20px", md: "28px" }}
          letterSpacing="-0.01em"
          color="#FFFFFF"
        >
          {subtitle}
        </Text>
      </GridItem>

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
