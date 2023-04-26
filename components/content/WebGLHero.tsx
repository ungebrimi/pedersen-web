import React, { Suspense } from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader";
import * as THREE from "three";

function HDRBackground() {
  const ref: any = useRef();
  const envMap = useLoader(EXRLoader, "/norway-scene.exr");
  useFrame((state, delta) => (ref.current.rotation.y += delta / 10));
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[10, 64, 32]} />
      <meshStandardMaterial
        map={envMap}
        side={THREE.BackSide}
        roughness={0}
        metalness={0.5}
      />
    </mesh>
  );
}

const WebGLHero = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-gray-900 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                A more immersive online experience
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Unlock the full potential of the web with our cutting-edge WebGL
                services. Immerse your audience in stunning 3D environments and
                interactive experiences that will leave a lasting impression
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/*HERE I WILL PUT A THREE:JS scene*/}
        <div className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full">
          <Suspense fallback="loading">
            <Canvas>
              <ambientLight intensity={2} />
              <HDRBackground />
              <OrbitControls minDistance={2} maxDistance={10} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default WebGLHero;
