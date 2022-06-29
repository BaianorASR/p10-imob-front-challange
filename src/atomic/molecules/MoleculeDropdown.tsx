import { Menu, Transition } from '@headlessui/react';
import { List } from 'phosphor-react';
import { FC, Fragment } from 'react';

export const MoleculeDropdown: FC = () => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="bg-imob-blue-500 bg-opacity-80 hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 inline-flex justify-center w-full px-1 py-1 text-sm font-medium text-white rounded-md">
            <List size={24} weight="duotone" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-imob-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? 'bg-imob-blue-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
