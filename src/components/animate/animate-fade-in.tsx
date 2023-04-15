import { Fragment, type FC, type PropsWithChildren } from 'react';

import { Transition } from '@headlessui/react';

export const AnimateFadeIn: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-in duration-1000 transition-all"
      enterFrom="opacity-0 translate-y-12"
      enterTo="opacity-100 translate-y-0"
    >
      {children}
    </Transition.Child>
  );
};
