import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition
} from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    return (
        <div className="bg-white h-16 px-4 flex justify-between items-center">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
                <input
                    type="text"
                    placeholder="Search..."
                    className=" text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4"
                />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <PopoverButton
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} />
                            </PopoverButton>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration 200"
                                enterForm="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveForm="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">This is the messages panel</div>
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <PopoverButton
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                            >
                                <HiOutlineBell fontSize={24} />
                            </PopoverButton>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration 200"
                                enterForm="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveForm="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="absolute right-0 z-10 mt-2.5 w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="text-gray-700 font-medium">Noticications</strong>
                                        <div className="mt-2 py-1 text-sm">This is the notification panel</div>
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </>
                    )}
                </Popover>

                {/* Menu drowdown with photo, below: */}

                <Menu as="div" className="relative inline text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover::bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <span className="sr-only">Open user menu</span>

                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                            >
                                <span className="sr-only">Hugh Jackson</span>
                            </div>
                        </MenuButton>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration 100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-200',
                                            'text-gray-700 focus:bg-gray-200  cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/profile')}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </MenuItem>

                            <MenuItem>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-200',
                                            'text-gray-700 focus:bg-gray-200  cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/settings')}
                                    >
                                        Settings
                                    </div>
                                )}
                            </MenuItem>

                            <MenuItem>
                                {({ active }) => (
                                    <div
                                        className={classNames(
                                            active && 'bg-gray-200',
                                            'text-gray-700 focus:bg-gray-200  cursor-pointer rounded-sm px-4 py-2'
                                        )}
                                        onClick={() => navigate('/logout')}
                                    >
                                        Logout
                                    </div>
                                )}
                            </MenuItem>
                        </MenuItems>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}
