import { ElementType } from "react";
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

import {
  MoneyBackGuaranteeIcon,
  HasslesFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icons";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing="6" align="start">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW="1024px" mx="auto" mt="60px" mb="8">
      <Stack
        mx={["6", "6", "12"]}
        spacing="5"
        direction={["column", "column", "row"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HasslesFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
};

export default Features;
