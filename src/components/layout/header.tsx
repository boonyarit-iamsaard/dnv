import Link from 'next/link';
import { type FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="fixed z-10 w-full">
      <div className="mx-auto flex h-16 w-full max-w-screen-lg items-center bg-transparent px-4 md:px-8">
        <Link
          href="/"
          className="flex px-4 py-2 font-serif text-2xl font-bold uppercase leading-none text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
        >
          DNV
        </Link>
      </div>
    </header>
  );
};
