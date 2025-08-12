import Image from "next/image";
import React from "react";

const TrustedBy = () => {
  return (
    <div className="text-text-inv-mid-lgt w-[70%] flex flex-col items-center justify-center m-auto space-y-5 max-w-[43rem] text-center">
      <p className="">Trusted by startup, government, and big tech companies</p>
      <div className="flex items-center justify-center flex-wrap gap-10">
        <Image
          src="/assets/images/evernote.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-28"
        />
        <Image
          src="/assets/images/booking.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-28"
        />
        <Image
          src="/assets/images/amazon.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-22"
        />
        <Image
          src="/assets/images/airbnb.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-24"
        />
        <Image
          src="/assets/images/google.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-22"
        />
        <Image
          src="/assets/images/razorpay.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-28"
        />
        <Image
          src="/assets/images/stripe.svg"
          width={100}
          height={10}
          alt="company-logo"
          className="w-20"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
