import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" pb="28">
      <Box
        color="gray.50"
        bg="purple.600"
        pt={["14", "14", "88px"]}
        pb={["28", "28", "198px"]}
        px="8"
        textAlign={["left", "left", "center"]}
      >
        <Heading
          as="h1"
          fontWeight="extrabold"
          fontSize={["3xl", "3xl", "5xl"]}
          mb="4"
        >
          Simple pricing for your business
        </Heading>
        <Text as="p" fontWeight="medium" fontSize={["lg", "lg", "2xl"]}>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
