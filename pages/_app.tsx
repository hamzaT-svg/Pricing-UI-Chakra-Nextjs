import { ChakraProvider } from "@chakra-ui/react";
import { ElementType } from "react";

function MyApp({
  Component,
  pageProps,
}: {
  Component: ElementType;
  pageProps: any;
}) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
