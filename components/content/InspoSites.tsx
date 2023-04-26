import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Save the rainforest",
    href: "https://rainforest.arkivert.no",
    src: "procedural-gl.png",
  },
  {
    id: 2,
    name: "Gergely Gizella",
    href: "https://logartis.info/",
    src: "logartis.png",
  },
  {
    id: 3,
    name: "Chartogne-Taillet",
    href: "https://chartogne-taillet.com/",
    src: "chartogne-taillet.png",
  },
];

export default function InspoSites() {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-100">
          Some amazing websites using WebGL
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  alt=""
                  src={product.src}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-200">
                <a href={product.href} target="_blank">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
