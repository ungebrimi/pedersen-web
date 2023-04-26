import Image from "next/image";

export default function AboutHosting() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">
                Hosting & domains
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                The importance of reliable hosting for their website{`'`}s
                uptime and performance.
              </h2>
              <p className="mt-6 text- leading-2 text-gray-100">
                When it comes to running a website, having reliable hosting is
                crucial for ensuring uptime and optimal performance. Uptime
                refers to the amount of time that a website is operational and
                accessible to users. If a website experiences frequent downtime,
                it can result in lost traffic, decreased revenue, and a poor
                user experience.
              </p>
              <p className="mt-2 text-gray-100">
                Reliable hosting providers use redundant systems to ensure that
                downtime is kept to a minimum. This can include backup power
                sources, redundant network connections, and hardware redundancy.
                These measures help to ensure that your website is available to
                visitors at all times, even during unexpected outages.
              </p>
              <p className="mt-2 text-gray-100">
                In addition to uptime, hosting can also impact website
                performance. A slow-loading website can lead to a poor user
                experience and increased bounce rates. A reliable hosting
                provider will use high-performance hardware and software, as
                well as caching and content delivery networks, to optimize
                website speed and performance.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <svg
            viewBox="0 0 366 729"
            role="img"
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
          >
            <title>App screenshot</title>
            <defs>
              <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                <rect width={316} height={684} rx={38} />
              </clipPath>
            </defs>
            <path
              fill="#4B5563"
              d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
            />
            <path
              fill="#343E4E"
              d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
            />
            <foreignObject
              width={316}
              height={684}
              transform="translate(24 24)"
              clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
            >
              <Image src="/mobilescreen.jpg" alt="" className="object-cover" />
            </foreignObject>
          </svg>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-300 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-100">
                The different types of hosting available (shared, VPS,
                dedicated) and which one might be best for their website{`'`}s
                needs
              </h2>
              <p className="mt-2">
                There are three main types of hosting available: shared hosting,
                virtual private servers (VPS), and dedicated hosting.
              </p>
              <p className="mt-2">
                Shared hosting is the most affordable option and involves
                sharing server resources with other websites. While this can be
                a cost-effective solution for smaller websites with low traffic,
                it can lead to slower load times and decreased performance if
                the server is overwhelmed.
              </p>
              <p className="mt-2">
                VPS hosting provides a virtual private server environment with
                dedicated resources and greater control over server
                configuration. This option can be more expensive than shared
                hosting, but it offers better performance and scalability.
              </p>
              <p className="mt-2">
                Dedicated hosting provides a dedicated physical server for a
                single website, offering maximum performance and customization.
                This option is typically the most expensive but can be necessary
                for websites with high traffic or complex server requirements.
              </p>
              <p className="mt-2">
                Choosing the best hosting option for your website depends on
                factors such as website traffic, performance requirements, and
                budget. A reliable hosting provider can help you assess your
                needs and recommend the best hosting option for your specific
                requirements.
              </p>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-100">
                The cost of hosting and how to choose a plan that fits their
                budget and website needs
              </h2>
              <p className="mt-2">
                The cost of hosting can vary widely depending on the hosting
                provider, hosting type, and level of service. Shared hosting is
                typically the most affordable option, with plans starting at
                just a few dollars per month. VPS and dedicated hosting can be
                significantly more expensive, but offer greater performance and
                flexibility.
              </p>
              <p className="mt-2">
                When choosing a hosting plan, it{`'`}s important to consider
                your website{`'`}s specific needs and budget. Look for a hosting
                provider that offers transparent pricing and clearly outlines
                the features and resources included in each plan. Consider
                factors such as storage space, bandwidth, and support when
                comparing hosting plans.
              </p>
              <p className="mt-2">
                Keep in mind that while cost is an important factor, choosing a
                hosting plan solely based on price can result in decreased
                performance and reliability. Invest in a hosting plan that
                offers the resources and support your website needs to operate
                smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
