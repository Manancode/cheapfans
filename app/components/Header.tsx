import { Search, Filter } from 'lucide-react'

export default function Header({ toggleFilter }) {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-3xl font-bold text-[#6D28D9] mb-4 md:mb-0">RichFans</h1>
        <div className="flex items-center w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6D28D9]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <button
            onClick={toggleFilter}
            className="ml-4 p-2 rounded-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] focus:outline-none focus:ring-2 focus:ring-[#6D28D9] focus:ring-offset-2"
            aria-label="Filter options"
          >
            <Filter size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}