import { useEffect, useState, Fragment } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CubeIcon,
  CurrencyDollarIcon,
  PaintBrushIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

type LinkType = {
  name: string;
  href: string;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navigation, setNavigation] = useState<LinkType[]>([]);
  const { t } = useTranslation("navigation");

  useEffect(() => {
    const nav: any = t("navigation.links", { returnObjects: true });
    setNavigation(nav);
  }, [t]);

  return (
    <header className="bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pedersen Webutvikling</span>
            <Image className="h-8 w-auto" src="/logo.svg" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-100">
              Products
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <CubeIcon
                        className="h-6 w-6 text-gray-400 group-hover:text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/products/webgl"
                        className="block font-semibold text-gray-100"
                      >
                        WebGL
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-100">
                        Discover more about WebGL
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <PaintBrushIcon
                        className="h-6 w-6 text-gray-400 group-hover:text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/products/web"
                        className="block font-semibold text-gray-100"
                      >
                        Responsive Web design
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-100">
                        Discover more about what our responsive websites has to
                        offer
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <ServerIcon
                        className="h-6 w-6 text-gray-400 group-hover:text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/products/hosting"
                        className="block font-semibold text-gray-100"
                      >
                        Domains & hosting
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-100">
                        Learn more about web domains and hosting providers
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <CurrencyDollarIcon
                        className="h-6 w-6 text-gray-400 group-hover:text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href="/products/pricing"
                        className="block font-semibold text-gray-100"
                      >
                        Pricing
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-100">
                        Review our general pricing
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/company"
            className="text-sm font-semibold leading-6 text-gray-100"
          >
            Company
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-100"
          >
            Contact
          </Link>
        </Popover.Group>
        {/*<div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-100"
          >
            Change language<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>*/}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pedersen Webutvikling</span>
              <Image className="h-8 w-auto" src="/logo.svg" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-100 leading-7 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                          as="a"
                          href="/products/webgl"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                        >
                          WebGL
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/products/web"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                        >
                          Responsive web design
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/products/hosting"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                        >
                          Domains & hosting
                        </Disclosure.Button>
                        <Disclosure.Button
                          as="a"
                          href="/products/pricing"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                        >
                          Pricing
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Company
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              {/*<div className="py-6">
                <button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-50">
                  Change language
                </button>
              </div>*/}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
