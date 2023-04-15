import { type NextPage } from 'next';

const ServicesPage: NextPage = () => {
  return (
    <span className="grid h-screen place-items-center bg-gradient-to-b from-black/75 to-black/50 text-center text-white">
      <div className="w-full max-w-screen-sm space-y-4 px-4 md:px-0">
        <h1 className="font-serif text-4xl font-bold uppercase">
          Our Services
        </h1>
      </div>
    </span>
  );
};

export default ServicesPage;
