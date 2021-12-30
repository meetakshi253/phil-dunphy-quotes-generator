import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue as mode,
  Button,
  Stack
} from "@chakra-ui/react";
import { RepeatIcon } from '@chakra-ui/icons'
import React from "react";

interface Props {
  children: React.ReactElement;
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`https://phil-dunphy-quotes-api.herokuapp.com/`)
  const data = await res.json()

  console.log(data.message.quote)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      quote: data.message.quote
    },
  }
};

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
        <Container 
        maxW="container.lg"
        centerContent
        >
          <Box
            borderWidth='1px'
            borderRadius='lg'
            shadow='base'
            width={['100%','70%' ]}
          >
            <Text 
            fontSize='lg'
            p='5'
            >
              {props.notFound? "An error occured" : props.quote}
            </Text>
          </Box>
          <Flex py="5" justifyContent="space-between" direction="row" width={['100%','70%' ]}>
            <Stack direction='row' spacing={4} align='center' >
              <Button colorScheme='teal' variant='ghost'>
                API
              </Button>
              <Button colorScheme='teal' variant='ghost'>
                GitHub
              </Button>
            </Stack>
            <Button rightIcon={<RepeatIcon />}colorScheme='teal' variant='solid'>
              Refresh
            </Button>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
};

export default Page;