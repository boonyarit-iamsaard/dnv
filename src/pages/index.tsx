import { type NextPage } from 'next';

import { AboutUs, OurRooms, Welcome } from '@/components/home';

import { PageSection } from '../components/common';

const HomePage: NextPage = () => {
  const sections = ['Facilities', 'Services', 'Membership'];

  return (
    <>
      <Welcome />
      <AboutUs />
      <OurRooms />

      {sections.map((section, index) => (
        <PageSection key={section} variant={index % 2 ? 'light' : 'white'}>
          <div className="grid h-[50vh] place-items-center">
            <h2 className="font-serif text-2xl font-bold uppercase">
              {section}
            </h2>
          </div>
        </PageSection>
      ))}
    </>
  );
};

export default HomePage;
