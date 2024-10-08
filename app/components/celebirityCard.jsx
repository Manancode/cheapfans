import { useState } from 'react'
import PaymentModal from './PaymentModal'

export default function CelebrityCard({ celebrity, onVote }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUpvote = async () => {
    setIsModalOpen(true)
  }

  const handlePaymentSuccess = async () => {
    const res = await fetch(`/api/upvote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ celebrityId: celebrity.id }),
    })

    if (res.ok) {
      onVote()
    }
    setIsModalOpen(false)
  }

  return (
    <div className="border rounded-lg p-4">
      <img src={celebrity.imageUrl} alt={celebrity.name} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{celebrity.name}</h2>
      <p>Votes: {celebrity.votes}</p>
      <button onClick={handleUpvote} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Upvote ($3)
      </button>
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={handlePaymentSuccess} />
    </div>
  )
}