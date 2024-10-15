import {  Button, VStack } from "@chakra-ui/react";
import { getGenreList } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

function GenreList() {

    const { data: genreList } = useQuery(
        ["genreList"],
        () => getGenreList(),
        {
          onError: () => {},
          retry: 2,
        }
      );
    
    return (
        <VStack spacing={2}>
            {genreList?.genres.map((genre:any) => (
                <Button key={genre.id} w="100%" variant="outline" color="teal">{genre.name}</Button>
            ))}
        </VStack>
      );
}

export default GenreList;