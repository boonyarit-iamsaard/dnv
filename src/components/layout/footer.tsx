import { type FC } from 'react';
import Link from 'next/link';

import {
  IconBrandFacebook,
  IconBrandLine,
  IconBrandTwitter,
  IconMail,
  IconPhoneCall,
} from '@tabler/icons-react';

import { routes } from '@/config/routes';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:dragonflynaturistvillage@gmail.com',
    icon: <IconMail />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/dragonflyDNV',
    icon: <IconBrandTwitter />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/DragonflyNaturist',
    icon: <IconBrandFacebook />,
  },
  {
    // TODO: Update Line link to official account
    name: 'Line',
    href: 'https://line.me/ti/p/kYRXC-5gOf',
    icon: <IconBrandLine />,
  },
];

export const Footer: FC = () => {
  return (
    <footer>
      <div className="bg-slate-800 text-slate-300">
        <div className="mx-auto grid w-full max-w-screen-lg gap-4 px-4 py-8 sm:gap-8 sm:px-8 sm:py-16 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="font-semibold uppercase">
              Dragonfly Naturist Village
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              aspernatur, corporis esse facere id laborum minima non placeat
              quia quidem.
            </p>
          </div>
          <div className="space-y-2 lg:col-start-3">
            <h3 className="font-semibold uppercase">Quick Links</h3>
            <ul>
              {routes.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-slate-200 hover:underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold uppercase">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p>Dragonfly Naturist Village</p>
                <p>
                  222/2 Moo 4, Nong Pla Lai, Banglamung District, Chonburi
                  20150, Thailand
                </p>
              </li>
              <li>
                <Link
                  href="tel:+66958904598"
                  className="inline-flex items-center gap-2 text-2xl leading-none hover:text-slate-200"
                >
                  <IconPhoneCall />
                  +66 95 890 4598
                </Link>
              </li>
              <li className="flex items-center gap-4">
                {socialLinks.map(({ name, href, icon }) => (
                  <Link
                    key={name}
                    href={href}
                    className="hover:text-white"
                    target="_blank"
                  >
                    <span className="sr-only">{name}</span>
                    {icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-16 items-center bg-slate-900 text-sm text-slate-400">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-4 sm:flex-row sm:justify-between sm:px-8">
          <p>&#64;Dragonfly Naturist Village. All rights reserved.</p>
          <p>
            Made with ❤️ by{' '}
            <Link
              href="https://github.com/boonyarit-iamsaard"
              target="_blank"
              className="hover:text-slate-300 hover:underline"
            >
              Boonyarit Iamsa-ard
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
