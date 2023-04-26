import Image from "next/image";

export default function AboutWebGL() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-green-600">
                WebGL
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                What is WebGL?
              </h1>
              <p className="mt-6 text-lg leading-2 text-gray-300">
                WebGL is a powerful technology that allows web developers to
                create interactive 3D graphics and animations directly in a web
                browser. With WebGL, you can create immersive and engaging user
                experiences that were previously only possible in native
                applications. Some of the benefits of using WebGL for your
                website include faster loading times, improved performance and
                responsiveness, and a more memorable and impactful user
                experience. Additionally, WebGL can help you to stand out from
                your competitors and attract new customers by offering something
                unique and innovative.
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
                The different types of 3D graphics you can incorporate into your
                website, and how they can be used to tell your brand story
              </h2>
              <p className="mt-2">
                There are many different types of 3D graphics that you can
                incorporate into your website, each with its own unique benefits
                and use cases. Some of the most common types of 3D graphics
                include 3D product images, interactive visualizations, and
                animated 3D models.
              </p>
              <p className="mt-2">
                3D product images are a great way to showcase your products in a
                more dynamic and engaging way. By allowing users to zoom in and
                out, rotate, and manipulate 3D models in real-time, they can
                gain a deeper understanding of your products and how they work.
              </p>
              <p className="mt-2">
                Interactive visualizations are another popular type of 3D
                graphics that can be used to tell your brand story. Whether it
                {`'`}s through an interactive timeline, a 3D map, or a virtual
                tour of your facilities, interactive visualizations can create a
                more immersive and memorable online experience for your
                customers.
              </p>
              <p className="mt-2">
                Finally, animated 3D models can be used to create engaging and
                dynamic visuals that help to tell your brand story. Whether it
                {`'`}s through an animated product demo or a 3D explainer video,
                animated 3D models can help to bring your brand to life and make
                your message more compelling.
              </p>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-100">
                The future of online experiences and how 3D graphics and virtual
                reality are shaping the way we interact with the web
              </h2>
              <p className="mt-2">
                As technology continues to advance, we{`'`}re seeing a growing
                trend towards more immersive and interactive online experiences.
                With the rise of 3D graphics and virtual reality, we{`'`}re
                beginning to see a shift towards more dynamic and engaging
                online experiences that mimic the real world.
              </p>
              <p className="mt-2">
                3D graphics and virtual reality are revolutionizing the way we
                interact with the web, and this trend is only set to continue in
                the future. From virtual showrooms to immersive product demos,
                3D graphics and virtual reality are enabling businesses to
                create more memorable and engaging online experiences for their
                customers.
              </p>
              <p className="mt-2">
                In addition to creating more engaging online experiences, 3D
                graphics and virtual reality can also provide a more intuitive
                way for users to interact with your products or services. By
                allowing users to manipulate 3D models in real-time or explore
                virtual environments, businesses can create a more immersive and
                memorable online experience that helps to build brand loyalty
                and drive sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
