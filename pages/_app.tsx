import {
  ChakraProvider,
  Flex,
  Box,
  Container,
  Text,
  Link,
  Heading,
  Stack,
  Button
} from '@chakra-ui/react'
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Random Phil Dunphy Quotes</title>
        <meta
          name="description"
          content="A simple website to show the use of phil-dunphy-quotes-api. Made using Next.js and NextUI by Meetakshi Setiya."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Flex minH="100vh" direction="column">

          <Box>
            <Container 
              maxW="container.lg" 
              py="7" 
              centerContent
            >
            
            <Flex 
              direction="column" 
              justify="center"
              overflow="auto"
              >
                <Heading as='h1' color='teal' paddingTop="3" size='lg' textAlign="center">Random Phil Dunphy Quote Generator</Heading>
                <Text py="2"  > A rest api that generates random quotes from the best character on Modern Family (fight me)</Text>
              </Flex>
            </Container>

          </Box>

          < Component {...pageProps} />

          <Box 
            borderTop="1px" 
            borderColor="gray.300"
          >
            <Container 
              maxW="container.lg" 
              py="5" 
              centerContent
            >
              <Flex 
                direction="row" 
                justify="center">
                <Text 
                  fontWeight="medium"
                  >
                    Made by</Text>&nbsp;
                <Link
                  href="https://www.meetakshisetiya.me"
                  color="teal"
                  fontWeight="bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meetakshi Setiya
                </Link>
              </Flex>
            </Container>
          </Box>
        </Flex>
      </ChakraProvider>
    </>
  )
}

export default MyApp