import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

interface IBarChartWidgetProps {
  client: any;
}

const BarChartWidget = ({ client }: IBarChartWidgetProps) => {
  return (
    <li
      key={client.id}
      className="overflow-hidden rounded-xl outline outline-gray-200"
    >
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <img
          alt={client.name}
          src={client.imageUrl}
          className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
        />
        <div className="text-sm/6 font-medium text-gray-900">{client.name}</div>
        <Menu as="div" className="relative ml-auto">
          <MenuButton className="relative block text-gray-400 hover:text-gray-500">
            <span className="absolute -inset-2.5" />
            <span className="sr-only">Open options</span>
            <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
              >
                View<span className="sr-only">, {client.name}</span>
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
              >
                Edit<span className="sr-only">, {client.name}</span>
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Last invoice</dt>
          <dd className="text-gray-700">
            <time dateTime={client.lastInvoice.dateTime}>
              {client.lastInvoice.date}
            </time>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Amount</dt>
          <dd className="flex items-start gap-x-2">
            <div className="font-medium text-gray-900">
              {client.lastInvoice.amount}
            </div>
            {client.lastInvoice.status == "Paid" ? (
              <div className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                {client.lastInvoice.status}
              </div>
            ) : null}
            {client.lastInvoice.status == "Withdraw" ? (
              <div className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                {client.lastInvoice.status}
              </div>
            ) : null}
            {client.lastInvoice.status == "Overdue" ? (
              <div className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                {client.lastInvoice.status}
              </div>
            ) : null}
          </dd>
        </div>
      </dl>
    </li>
  );
};

export default BarChartWidget;
