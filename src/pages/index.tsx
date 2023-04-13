import { type NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <section className="grid h-screen place-items-center bg-gradient-to-b from-black/75 to-black/50 text-center text-white">
        <div className="w-full max-w-screen-sm space-y-4">
          <p>Welcome to</p>
          <h1 className="font-serif text-4xl font-bold uppercase">
            Dragonfly Naturist Village
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
