import { Box } from "@chakra-ui/react";
import MovieItem from "../molecules/MovieItem";
import { useQuery } from "@tanstack/react-query";
import { getMovieList } from "../../api/api";

function MovieList() {

    const { data: movieList } = useQuery(
        ["movieList"],
        () => getMovieList(),
        {
          onError: () => {},
          retry: 2,
        }
      );

    return (
        <Box>
            {movieList?.results.map((movie:any) => (
                <Box key={movie.id}>
                    <MovieItem movie={movie}/>
                </Box>
            ))}

            
        </Box>
      );
}

export default MovieList;