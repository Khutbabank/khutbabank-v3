import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../../Navbar';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col bg-background ">
        <Navbar />
        <div className="px-8 md:px-25 pt-4 pb-25 md:pt-5 md:py-24">
          <h1 className="font-semibold text-heading md:text-super-heading leading-title text-primary wrap-break-word">
            Jummah Khutbas tailored for the Muslim Community
          </h1>
          <div className="flex lg:justify-between gap-14 mt-8">
            <Image
              src="/hero/quran.png"
              width={888}
              height={352}
              className="hidden md:block md:w-87.5 md:max-w-87.5 lg:w-150 lg:max-w-150 xl:max-w-none xl:w-full max-h-88 object-cover rounded-xl"
              alt="Quran"
            />
            <div className="flex flex-col gap-7 justify-self-end lg:max-w-79.5">
              <h3 className="font-bold text-3xl text-secondary">
                For Khateebs all around the world
              </h3>
              <p className="hidden md:block text-black text-lg">
                Khutba Bank has regularly provided high-quality khutba scripts
                for schools, universities, youth circles, mosques and work
                places.
              </p>
              <Link href="/khutbas">
                <Button className="bg-primary text-white font-bold rounded-full p-5">
                  View All Khutbas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
