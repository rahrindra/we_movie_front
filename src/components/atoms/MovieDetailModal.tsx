import { AspectRatio, Box, Button, Center, Divider, Heading, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import MovieItem from "../molecules/MovieItem";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../api/api";

export type MovieDetailModalProps = {
    id: number;
}

function MovieDetailModal({id}: MovieDetailModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data: movie } = useQuery(
        ["movie", id],
        () => getMovieDetails(id),
        {
          onError: () => {},
          retry: 2,
        }
      );

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>
                Lire la suite
            </Button>

            <Modal size="2xl" blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalBody>
                    
                    <Image 
                        boxSize='100%' 
                        src= {`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                        alt={movie?.title}>
                    </Image>
                    <Heading>
                        {movie.title}
                    </Heading>
                    <Text fontSize="xs">
                        <Text as="span"> note: {movie?.vote_average.toFixed(1)}/10</Text>
                        <Text as="span"> {`(${movie?.vote_count}  votes)`}</Text>
                    </Text>

                    <Text>
                        {movie?.overview}
                    </Text>
                    
                    <Divider mt={5} border={1} borderColor="gray" />
                </ModalBody>

                <ModalFooter>
                    <Button size="lg" w="100%" onClick={onClose}>
                        Fermer
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>

            
        </>
      );
}

export default MovieDetailModal;