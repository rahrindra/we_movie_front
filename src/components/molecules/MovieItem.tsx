import { Box, Button, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import MovieDetailModal from "../atoms/MovieDetailModal";

function MovieItem({movie}: any) {

    console.log(movie);

    return (
        <Flex mb={3} p={5} bg="gray.300">
            <Image 
                boxSize='150px' 
                src= {`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                alt={movie?.title}>
            </Image>
            <Box ml={5}>
                <Text>
                    <Heading size="md" as="span">{movie?.title}</Heading>
                    <Text as="span"> note: {movie?.vote_average.toFixed(1)}/10</Text>
                    <Text as="span"> {`(${movie?.vote_count}  votes)`}</Text>
                </Text>
                <Text>
                    <Text color="salmon" as="span"> {format(new Date(movie?.release_date), "yyyy")}</Text>
                </Text>
                <Text noOfLines={3}>
                    {movie?.overview}
                </Text>
                <Flex mt={3}>
                    <Spacer />
                    <MovieDetailModal id={movie.id} />
                </Flex>
                
            </Box>
        </Flex>
      );
}

export default MovieItem;