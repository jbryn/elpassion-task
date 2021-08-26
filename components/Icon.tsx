import { Square, Box } from "@chakra-ui/react";

type IconProps = {
  iconUrl: string;
};

export default function Icon(props: IconProps) {
  const { iconUrl } = props;
  return (
    <Square size="100%" bg="#000000">
      <Box
        h="20px"
        w="20px"
        backgroundImage={iconUrl}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      />
    </Square>
  );
}
