import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue as mode,
  Button,
  Stack,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import React from "react";
import Link from "next/link";
import Router from "next/router";

interface Props {
  children: React.ReactElement;
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`https://phil-dunphy-quotes-api.herokuapp.com/`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      quote: data.quote,
    },
  };
}

const Page = (props: { quote: string; notFound?: boolean }) => {
  return (
    <Flex
      direction="column"
      flex="1"
      overflow="hidden"
      width="100%"
      height="100%"
    >
      <Box
        overflowY="auto"
        flex="1"
        py={{ base: "10", md: "16" }}
        px={{ base: "6", md: "10" }}
      >
        <Container maxW="container.lg" centerContent>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            shadow="base"
            width={["100%", "70%"]}
          >
            <Text fontSize="lg" p="5">
              {props.notFound ? "An error occured" : props.quote}
            </Text>
            <Text textAlign="right" p="5" pt="0.5" fontSize="sm">- Phil Dunphy</Text>
          </Box>
          <Flex
            py="5"
            justifyContent="space-between"
            direction="row"
            width={["100%", "70%"]}
          >
            <Stack direction="row" spacing={4} align="center">
              <Link
                href="https://phil-dunphy-quotes-api.herokuapp.com"
                passHref={true}
              >
                <Button colorScheme="teal" variant="ghost">
                  API
                </Button>
              </Link>
              <Link
                href="https://github.com/meetakshi253/phil-dunphy-quotes-api"
                passHref={true}
              >
                <Button colorScheme="teal" variant="ghost">
                  GitHub
                </Button>
              </Link>
            </Stack>
            <Button
              rightIcon={<RepeatIcon />}
              colorScheme="teal"
              variant="solid"
              onClick={() => Router.reload()}
            >
              Refresh
            </Button>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export default Page;
