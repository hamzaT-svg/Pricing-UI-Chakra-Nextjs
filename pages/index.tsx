import { Box } from "@chakra-ui/react";
import Features from "../components/Features";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
export default function Home() {
  return (
    <Box>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}
