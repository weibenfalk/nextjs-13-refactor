// Components
import Thumb from '../Thumb/Thumb';

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
};

const Card = ({ imgUrl, title, subtitle }: Props) => (
  <div className='h-80'>
    <div className='relative h-full'>
      <Thumb imgUrl={imgUrl} />
      <div className='absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800'>
        <h2 className='text-cyan-200 text-center text-sm truncate'>{title}</h2>
        {subtitle ? <p className='text-cyan-400 text-center text-xs truncate'>{subtitle}</p> : null}
      </div>
    </div>
  </div>
);

export default Card;
