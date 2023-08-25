
import { Fragment, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './NavBar.css'

const navigation = [
    { name: 'Home', to: '/home', current: true },
    { name: 'Contact', to: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar({ setDarkToggle, darkToggle }) {

    const [activeTab, setActiveTab] = useState(navigation[0].name); // Estado para mantener la pestaña activa

    return (
        <Disclosure as="nav" className="bg-white dark:bg-gray-900">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 dark:text-white" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 dark:text-white" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>

                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className='text-black self-center text-2xl font-medium dark:text-white'>Marion<span className='text-cyan-500 dark:text-cyan-300'>MBC</span></div>
                                <div className='absolute right-0 sm:hidden'>
                                    <label className="toggleDarkBtn">
                                        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
                                        <span className="slideBtnTg round"></span>
                                    </label>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4 items-center justify-between">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => setActiveTab(item.name)} // Actualiza la pestaña activa al hacer clic
                                    className={classNames(
                                        item.name === activeTab ? 'bg-cyan-300 text-gray-900' : 'text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.name === activeTab ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <div className='justify-self-end'>
                                {/* ... (resto del código) */}
                            </div>
                        </div>
                    </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
    <div className="space-y-1 px-2 pb-3 pt-2 bg-white dark:bg-gray-900">
        {navigation.map((item) => (
            <NavLink
                key={item.name}
                as="a"
                to={item.to}
                onClick={() => setActiveTab(item.name)} // Actualiza la pestaña activa al hacer clic
                className={classNames(
                    item.name === activeTab ? 'bg-cyan-300 text-gray-900' : 'text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                )}
                aria-current={item.name === activeTab ? 'page' : undefined}
            >
                {item.name}
            </NavLink>
        ))}
    </div>
</Disclosure.Panel>

                </>
            )}
        </Disclosure>
    )
}





