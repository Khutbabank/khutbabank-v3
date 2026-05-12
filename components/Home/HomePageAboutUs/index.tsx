import Link from 'next/link';

import Image from 'next/image';

import { Button } from '@/components/ui/button';

const HomePageAboutUs = () => {
  return (
    <>
      <div className="bg-white flex flex-col lg:flex-row gap-10 py-[100px] px-8 md:px-[100px] lg:gap-20 xl:gap-32">
        <Image
          src="/homePageAboutUs/books.png"
          width={542}
          height={707}
          className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-none lg:w-[450px] lg:max-w-[450px] xl:max-w-none xl:w-full xl:max-h-[707px] object-cover object-center rounded-xl"
          alt="Quran"
        />
        <div className="flex flex-col gap-4 lg:gap-10">
          <h1 className="text-heading font-bold text-primary leading-title">
            Thousands of Muslims benefited on daily basis
          </h1>
          <p className="text-normal text-black">
            Khutba Bank aims to help improve khutbas delivered worldwide. We
            provide high-quality khutba scripts for schools, universities,
            mosques and workplaces. Our scripts have also been used by youth
            circles as we cover challenging topics like love, coping with
            stress, evolution and others. We also provide tips on how to
            effectively deliver a sermon.
          </p>
          <Link href="/about-us" className="mt-5 lg:mt-14">
            <Button className="bg-primary text-white font-bold rounded-full p-5">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePageAboutUs;
