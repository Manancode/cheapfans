import { ChevronUp } from 'lucide-react'

const creators = [
  { id: 1, name: 'Emma Johnson', image: '/placeholder.svg?height=300&width=300&text=Emma+J', votes: 1234 },
  { id: 2, name: 'Liam Smith', image: '/placeholder.svg?height=300&width=300&text=Liam+S', votes: 987 },
  { id: 3, name: 'Olivia Brown', image: '/placeholder.svg?height=300&width=300&text=Olivia+B', votes: 2345 },
  { id: 4, name: 'Noah Davis', image: '/placeholder.svg?height=300&width=300&text=Noah+D', votes: 876 },
  { id: 5, name: 'Ava Wilson', image: '/placeholder.svg?height=300&width=300&text=Ava+W', votes: 1567 },
  { id: 6, name: 'Ethan Taylor', image: '/placeholder.svg?height=300&width=300&text=Ethan+T', votes: 654 },
  { id: 7, name: 'Sophia Anderson', image: '/placeholder.svg?height=300&width=300&text=Sophia+A', votes: 3210 },
  { id: 8, name: 'Mason Thomas', image: '/placeholder.svg?height=300&width=300&text=Mason+T', votes: 789 },
]

export default function CreatorGrid({ openUpvoteModal, filterOption }) {
  const sortedCreators = [...creators].sort((a, b) => {
    if (filterOption === 'Most Voted') return b.votes - a.votes
    if (filterOption === 'Least Voted') return a.votes - b.votes
    return 0 // 'Recently Added' would typically use a timestamp, defaulting to original order here
  })

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {sortedCreators.map((creator) => (
        <div key={creator.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
          <img src={creator.image} alt={creator.name} className="w-full aspect-square object-cover" />
          <div className="p-4">
            <h2 className="font-bold text-lg mb-2">{creator.name}</h2>
            <button
              onClick={() => openUpvoteModal(creator)}
              className="w-full bg-[#FCD34D] text-[#1F2937] font-bold py-2 px-4 rounded-full hover:bg-[#F59E0B] transition-colors flex items-center justify-center"
            >
              <ChevronUp size={20} className="mr-2" />
              Upvote
            </button>
            <p className="text-center mt-2">{creator.votes} votes</p>
          </div>
        </div>
      ))}
    </div>
  )
}