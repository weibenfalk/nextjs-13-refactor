import Image from 'next/image';

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => (
  <div className='relative w-full h-128'>
    <div className='relative flex flex-col-reverse h-full max-w-7xl m-auto z-10 pb-12 text-center md:text-left'>
      <div className='text-white max-w-2xl px-4'>
        <h2 className='text-2xl md:text-5xl font-bold pb-8'>{title}</h2>
        <p className='text-lg md:text-xl'>{text}</p>
      </div>
    </div>
    <Image className="object-cover" priority fill src={imgUrl} alt='hero-image' />
  </div>
);

export default Hero;
