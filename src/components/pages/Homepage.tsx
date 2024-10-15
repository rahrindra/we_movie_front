import { Box, Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import GenreList from "../organisms/GenreList";
import MovieList from "../organisms/MovieList";

function Homepage() {
  

  return (
    <Box px="20%" bgColor="gray.200" pt={10}>
      <SimpleGrid columns={2} spacing={10} >
      <Box>
        <Heading color="teal">
          We Movie
        </Heading>
      </Box>
      <Box bg='white'>
        Ici la barre de recherche
      </Box>
      </SimpleGrid>

      <Box mt={10} h="400px" bg="pink.400">
        Ici le slide
      </Box>

      <Flex mt={10} w="100%">
        <Box w="30%"  bg="white">
          <GenreList />
        </Box>

        <Spacer />

        <Box bg="gray.400" w="65%">
          <MovieList />
        </Box>
      </Flex>
    </Box>
  );
}

export default Homepage;