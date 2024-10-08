"use client"
import { useState } from 'react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search logic here
    console.log('Searching for:', searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-lg">
      <input
        type="text"
        placeholder="Search creators..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-full border-2 border-purple-300 focus:outline-none focus:border-purple-500"
      />
    </form>
  )
}