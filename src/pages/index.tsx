import { type NextPage } from 'next';

import {
  AboutUs,
  Facilities,
  Memberships,
  OurRooms,
  Services,
  Welcome,
} from '@/components/home';

const HomePage: NextPage = () => {
  return (
    <>
      {/* variants: default, size: full, withBackgroundImage: true */}
      <Welcome />
      {/* variant: white, size: default, withBackgroundImage: false */}
      <AboutUs />
      {/* variant: light, size: default, withBackgroundImage: false */}
      <OurRooms />
      {/* variant: default, size: default, withBackgroundImage: false */}
      <Services />
      {/* variant: white, size: default, withBackgroundImage: false */}
      <Facilities />
      {/* variant: light, size: default, withBackgroundImage: false */}
      <Memberships />
    </>
  );
};

export default HomePage;
