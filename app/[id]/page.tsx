import React from 'react';
import { movieUrl, creditsUrl, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
// Components
import Header from '../../components/Header/Header';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Actors from '../../components/Actors/Actors';
import Spinner from '../../components/Spinner/Spinner';
// Types
import type { Movie, Credits } from '../../api/types';

type Props = {
  params: {
    id: string;
  }
}

async function getMovieData(id: string) {
  const movie = await fetch(movieUrl(id));
  return (await movie.json()) as Movie;
}

async function getCreditsData(id: string) {
  const credits = await fetch(creditsUrl(id));
  return (await credits.json()) as Credits;
}

export default async function MoviePage({ params: { id } }: Props) {
  const _movie = getMovieData(id);
  const _credits = getCreditsData(id);

  const movie = await _movie;

  return (
    <main>
      <Header />
      <Breadcrumb title={movie.original_title} />
      <React.Suspense fallback={<Spinner />}>
        <MovieInfo
          creditsPromise={_credits}
          thumbUrl={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : '/no_image.jpg'}
          rating={movie.vote_average}
          year={movie.release_date.split('-')[0]}
          backgroundImgUrl={
            movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : '/no_image.jpg'
          }
          title={movie.original_title}
          summary={movie.overview}
          time={movie.runtime}
          budget={movie.budget}
          revenue={movie.revenue}
        />
        <Actors creditsPromise={_credits} />
      </React.Suspense>
    </main>
  );
}
