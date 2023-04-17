import { useState } from "react";
import { Dialog, RadioGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  const { t } = useTranslation("pricing");
  const frequencies: any = t("pricing.frequencies", {
    returnObjects: true,
  });
  const tiers: any = t("pricing.tiers", { returnObjects: true });
  const faqs: any = t("faq.questions", { returnObjects: true });
  console.log(faqs);
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <main className="bg-gray-900">
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-green-400">
            {t("header.sub_title")}
          </h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t("header.title")}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          {t("header.description")}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-green-300">
          {t("header.disclaimer")}
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies &&
              frequencies.map((option: any) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? "bg-green-500" : "",
                      "cursor-pointer rounded-full px-2.5 py-1"
                    )
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers &&
            tiers.map((tier: any) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-white/5 ring-2 ring-green-500"
                    : "ring-1 ring-white/10",
                  "rounded-3xl p-8 xl:p-10"
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={tier.id}
                    className="text-lg font-semibold leading-8 text-white"
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      {t("pricing.most_popular")}
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-green-500 text-white shadow-sm hover:bg-green-400 focus-visible:outline-green-500"
                      : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  {t("pricing.order")}
                </a>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  {tier.features.map((feature: any) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-white"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {/* Testimonial section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>{t("reviews.person_left.review")}</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="/jesus.png"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-white">
                    {t("reviews.person_left.name")}
                  </div>
                  <div className="mt-1 text-gray-400">
                    {t("reviews.person_left.role")}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-white">
                <p>{t("reviews.person_left.review")}</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  className="h-14 w-14 rounded-full bg-gray-800"
                  src="/vic.jpeg"
                  alt=""
                />
                <div className="text-base">
                  <div className="font-semibold text-white">
                    {t("reviews.person_right.name")}
                  </div>
                  <div className="mt-1 text-gray-400">
                    {t("reviews.person_right.role")}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
          {t("faq.title")}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          {t("faq.description_first")}
          <a
            href="#"
            className="font-semibold text-green-400 hover:text-green-300"
          >
            {t("faq.send_email")}
          </a>{" "}
          {t("faq.description_second")}
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs &&
              faqs.map((faq: any) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">
                    {faq.answer}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
