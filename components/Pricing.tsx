import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
  Icon,
  StackProps,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="5" {...rest} align="flex-start">
      <Icon as={CheckIcon} w="6" h="6" />
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        mx="auto"
        mt="-56"
        bg="White"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Flex
            bg="#F0EAFB"
            direction="column"
            align="center"
            justify="center"
            p={["8", "8", "16"]}
          >
            <Text fontSize="24px" fontWeight="800">
              Premium PRO
            </Text>
            <Heading
              as="h3"
              fontSize={["5xl", "5xl", "60px"]}
              mt="16px"
              mb="8px "
            >
              $329
            </Heading>
            <Text color="#171923" fontSize="18px" fontWeight="500">
              {" "}
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="24px">
              Get Started
            </Button>
          </Flex>
          <Box py={["8", "8", "16"]} px={["4", "4", "16"]} fontSize="lg">
            <Text mb="6">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Pricing;
