import { Transition } from '@headlessui/react';
import { type FC, type PropsWithChildren } from 'react';

import { InView } from 'react-intersection-observer';

export const AnimateInView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <Transition.Root show={inView}>{children}</Transition.Root>
        </div>
      )}
    </InView>
  );
};
