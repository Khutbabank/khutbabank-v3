import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <>
      <div className="px-8 md:px-25 py-9">
        <h1 className="text-heading text-primary font-bold">Get in touch</h1>
        <h2 className="text-sub-heading text-secondary font-bold">
          We&apos;d love to hear from you!
        </h2>
        <p className="text-black text-normal mt-5">
          We want to make sure that you have the best experience and delivery
          when using the Khutba Bank. If there is any feedback that you have,
          feel free to contact as by emailing
          <b> khutbabank1@gmail.com</b>.
        </p>
        <Link href="/khutbas">
          <Button className="bg-primary text-white font-bold rounded-full mt-14 py-6 pl-6">
            Browse the Khutba Bank
            <div className="bg-white rounded-full ml-5 w-8">
              <i className="ri-arrow-right-line text-primary text-2xl" />
            </div>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ContactUs;
