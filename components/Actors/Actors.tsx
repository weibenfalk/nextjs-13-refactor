// Urls
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Components
import Grid from '../../components/Grid/Grid';
import Card from '../../components/Card/Card';
// Types
import type { Credits } from '../../api/types';

type Props = {
  creditsPromise: Promise<Credits>;
};

const Actors = async ({ creditsPromise }: Props) => {
  const credits = await creditsPromise;

  return (
    <Grid className='p-4 max-w-7xl m-auto' title='Actors'>
    {credits.cast.map(actor => (
      <Card
        key={actor.credit_id}
        imgUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : '/no_image.jpg'}
        title={actor.name}
        subtitle={actor.character}
      />
    ))}
  </Grid>
  );
};

export default Actors;
