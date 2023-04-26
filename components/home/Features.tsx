import React, { useState, useEffect } from "react";
import {
  PaintBrushIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  PencilIcon,
  BoltIcon,
  RocketLaunchIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const iconMap = {
  PerformanceIcon: BoltIcon,
  LockIcon: LockClosedIcon,
  PenIcon: PencilIcon,
  FingerprintIcon: FingerPrintIcon,
  GearIcon: Cog6ToothIcon,
  CryptoIcon: RocketLaunchIcon,
  ResponsiveIcon: PaintBrushIcon,
  WebGLIcon: CubeIcon,
  ServerIcon: ServerIcon,
};

// Helper function to get the corresponding Heroicons component for an icon name
function getIconComponent(iconName: string) {
  //@ts-ignore
  const iconComponent = iconMap[iconName];
  if (!iconComponent) {
    console.warn(`Unknown icon name: ${iconName}`);
  }
  return iconComponent;
}

type Feature = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: string;
};

const Features = () => {
  const { t } = useTranslation("homepage");
  const [primaryFeatures, setPrimaryFeatures] = useState<Feature[]>([]);
  const [secondaryFeatures, setSecondaryFeatures] = useState<Feature[]>([]);

  useEffect(() => {
    const primary: any = t("homepage.solutions.list", { returnObjects: true });
    const secondary: any = t("homepage.services.list", { returnObjects: true });
    setPrimaryFeatures(primary);
    setSecondaryFeatures(secondary);
  }, [t]);

  return (
    <section>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-green-400">
            {t("homepage.solutions.sub_title")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("homepage.solutions.title")}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {t("homepage.solutions.description")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {primaryFeatures &&
              primaryFeatures.map((feature: any) => {
                const IconComponent = getIconComponent(feature.icon);
                return (
                  <div key={feature.title} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                        {IconComponent && (
                          <IconComponent
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      {feature.title}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm font-semibold leading-6 text-green-400"
                        >
                          {feature.cta} <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                );
              })}
          </dl>
        </div>
      </div>

      {/* Feature section */}
      <div className="mt-32 sm:mt-56">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-400">
              {t("homepage.services.sub_title")}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t("homepage.services.title")}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("homepage.services.description")}
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="/webdev.jpg"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {secondaryFeatures.map((feature: any) => {
              const IconComponent = getIconComponent(feature.icon);
              return (
                <div key={feature.title} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    {IconComponent && (
                      <IconComponent
                        className="absolute left-1 top-1 h-5 w-5 text-green-600"
                        aria-hidden="true"
                      />
                    )}
                    {feature.title}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
