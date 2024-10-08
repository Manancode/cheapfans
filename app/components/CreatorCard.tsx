interface CreatorProps {
    creator: {
      id: number;
      name: string;
      imageUrl: string;
      votes: number;
    };
    onUpvote: (creator: any) => void;
  }
  
  export default function CreatorCard({ creator, onUpvote }: CreatorProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <img src={creator.imageUrl} alt={creator.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{creator.name}</h3>
          <button
            onClick={() => onUpvote(creator)}
            className="bg-yellow-300 text-purple-700 font-bold py-2 px-4 rounded-full w-full"
          >
            Upvote
          </button>
          <p className="text-center mt-2">{creator.votes} votes</p>
        </div>
      </div>
    )
  }