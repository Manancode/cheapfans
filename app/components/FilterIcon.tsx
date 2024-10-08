"use client"
import { SetStateAction, useState } from 'react'
import { Menu } from '@headlessui/react'

export default function FilterIcon() {
  const [activeFilter, setActiveFilter] = useState('Most Voted')

  const handleFilterChange = (filter: SetStateAction<string>) => {
    setActiveFilter(filter)
    // Implement filtering logic here
    console.log('Filtering by:', filter)
  }

  return (
    <Menu as="div" className="relative inline-block text-left ml-4">
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-purple-700 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {['Most Voted', 'Least Voted', 'Recently Added'].map((filter) => (
          <Menu.Item key={filter}>
            {({ active }) => (
              <button
                className={`${
                  active ? 'bg-purple-500 text-white' : 'text-gray-900'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="ml-2">✓</span>
                )}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}