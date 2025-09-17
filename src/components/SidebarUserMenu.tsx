import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const SidebarUserMenu = () => {
  return (
    <Menu as="li" className="relative inline-block mt-auto">
      <MenuButton as="div" className="-mx-6">
        <a
          href="#"
          className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
        >
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5"
          />
          <span className="sr-only">Your profile</span>
          <span aria-hidden="true">Tom Cook</span>
        </a>
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 bottom-full mb-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Sign out
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default SidebarUserMenu;
