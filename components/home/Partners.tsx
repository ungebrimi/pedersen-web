import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="-mx-6 grid grid-cols-2 gap-0.5 px-6 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
        <div className="bg-white/5 p-6 sm:p-10 relative">
          <Image
            className="max-h-32 w-full py-2 m-auto inset-0 absolute object-contain"
            src="/vercel.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
        </div>
        <div className="bg-white/5 p-6 sm:p-10 relative">
          <Image
            className="max-h-24 w-full py-2 m-auto inset-0 absolute object-contain"
            src="/next.svg"
            alt="Reform"
            width={158}
            height={48}
          />
        </div>

        <div className="bg-white/5 p-6 sm:p-10 relative">
          <Image
            className="max-h-24 w-full py-2 m-auto inset-0 absolute object-contain"
            src="/webgl.svg"
            alt="Laravel"
            width={158}
            height={48}
          />
        </div>

        <div className="bg-white/5 p-6 sm:p-10 relative">
          <Image
            className="max-h-20 w-full py-2 m-auto inset-0 absolute object-contain"
            src="go.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
        <div className="bg-white/5 p-6 sm:p-10 relative">
          <Image
            className="max-h-12 w-full py-2 m-auto inset-0 absolute object-contain"
            src="/node.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
        </div>
        <div className="bg-white/5 p-6 sm:p-10 relative">
          <Image
            className="max-h-16 w-full  py-2 m-auto inset-0 absolute object-contain"
            src="/sql.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
