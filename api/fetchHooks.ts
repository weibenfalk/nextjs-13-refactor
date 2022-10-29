import { useInfiniteQuery } from '@tanstack/react-query';
// Fetch function
import { fetchMovies } from './fetchFunctions';
// Types
import { Movies } from './types';

export const useFetchMovies = (search: string) => {
  return useInfiniteQuery(['movies', search], ({ pageParam = 1 }) => fetchMovies(search, pageParam), {
    getNextPageParam: (lastPage: Movies) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }

      return undefined;
    },
    refetchOnWindowFocus: false
  });
};
