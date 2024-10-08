import { X } from 'lucide-react'

export default function UpvoteModal({ creator, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Support {creator.name}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <img src={creator.image} alt={creator.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <p className="text-center text-lg mb-4">Support {creator.name} with $1</p>
        <button className="w-full bg-[#6D28D9] text-white font-bold py-2 px-4 rounded-full hover:bg-[#5B21B6] transition-colors">
          Proceed to Pay
        </button>
      </div>
    </div>
  )
}