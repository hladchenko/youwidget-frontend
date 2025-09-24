import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";

import {
  NAVIGATION_ITEMS,
  USER_NAVIGATION_ITEMS,
} from "@shared/config/mockData.ts";
import { classNames } from "@shared/utils";

const DashboardLayout = () => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-indigo-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <NavLink to="/widgets" className="shrink-0">
                  <img
                    alt="YouWiget"
                    src="/logo-white.png"
                    className="h-8 w-auto"
                  />
                </NavLink>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {NAVIGATION_ITEMS.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-indigo-700 text-white"
                              : "text-white hover:bg-indigo-500/75",
                            "rounded-md px-3 py-2 text-sm font-medium",
                          )
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={"/profile.png"}
                        className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      {USER_NAVIGATION_ITEMS.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500/75 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {NAVIGATION_ITEMS.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={() => (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-indigo-700 text-white"
                            : "text-white hover:bg-indigo-500/75",
                          "block rounded-md px-3 py-2 text-base font-medium",
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                />
              ))}
            </div>
            <div className="border-t border-indigo-700 pb-3">
              <div className="mt-3 space-y-1 px-2">
                {USER_NAVIGATION_ITEMS.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500/75"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
