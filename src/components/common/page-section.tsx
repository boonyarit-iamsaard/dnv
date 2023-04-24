import { type FC } from 'react';
import Image, { type StaticImageData } from 'next/image';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

const section = cva(
  'page-section text-slate-900 transition-colors duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        white: 'bg-white hover:bg-slate-100',
        light: 'bg-slate-200 hover:bg-slate-300',
      },
      size: {
        default: 'py-16 md:py-24',
        full: 'grid h-screen place-items-center',
      },
      withBackgroundImage: {
        true: 'relative bg-gradient-to-b from-black/75 to-black/50 text-white',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      withBackgroundImage: false,
    },
  }
);

export type PageSectionProps = JSX.IntrinsicElements['section'] & {
  backgroundImg?: {
    src: string | StaticImageData;
    alt: string;
  };
} & VariantProps<typeof section>;

export const PageSection: FC<PageSectionProps> = ({
  backgroundImg,
  children,
  className,
  size,
  variant,
  withBackgroundImage,
  ...props
}) => {
  return (
    <section
      className={section({ className, size, variant, withBackgroundImage })}
      {...props}
    >
      {backgroundImg && (
        <Image
          src={backgroundImg.src}
          fill
          alt={backgroundImg.alt}
          className="-z-10 object-cover"
        />
      )}
      <div className="mx-auto w-full max-w-screen-lg px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, translateY: 64 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
