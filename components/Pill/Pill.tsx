type Props = {
  text: string;
  className?: string;
};

const Pill = ({ className, text }: Props) => (
  <div className={`bg-cyan-800 text-white text-sm font-bold px-2 py-1 m-2 rounded-full inline-block ${className}`}>
    {text}
  </div>
);

export default Pill;
