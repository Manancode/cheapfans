import { X } from 'lucide-react'

export default function FilterOptions({ setFilterOption, closeFilter }) {
  const options = ['Most Voted', 'Least Voted', 'Recently Added']

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Filter Options</h2>
          <button onClick={closeFilter} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setFilterOption(option)
                closeFilter()
              }}
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-[#F3F4F6] transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}