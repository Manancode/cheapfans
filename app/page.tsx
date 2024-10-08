import { useState, useEffect } from 'react'
import CelebrityCard from '../components/CelebrityCard'

export default function Home() {
  const [celebrities, setCelebrities] = useState([])

  useEffect(() => {
    fetchCelebrities()
  }, [])

  const fetchCelebrities = async () => {
    const res = await fetch('/api/celebrities')
    const data = await res.json()
    setCelebrities(data)
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Celebrity Voting</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {celebrities.map((celebrity) => (
          <CelebrityCard key={celebrity.id} celebrity={celebrity} onVote={fetchCelebrities} />
        ))}
      </div>
    </div>
  )
}