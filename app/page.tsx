"use client"
import { useState } from 'react'
import Header from './components/Header'
import CreatorGrid from './components/CreatorGrid'
import UpvoteModal from './components/upvoteModal'
import FilterOptions from './components/FilterOptions'

export default function LandingPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedCreator, setSelectedCreator] = useState(null)
  const [filterOption, setFilterOption] = useState('Most Voted')

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen)

  const openUpvoteModal = (creator) => setSelectedCreator(creator)
  const closeUpvoteModal = () => setSelectedCreator(null)

  return (
    <div className="min-h-screen bg-[#F3F4F6] font-sans text-[#1F2937]">
      <Header toggleFilter={toggleFilter} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Does Your Favorite Creator Have the Most Loyal Fans?
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8">
          Show your support with just $1 and help them climb to the top!
        </p>
        <CreatorGrid openUpvoteModal={openUpvoteModal} filterOption={filterOption} />
      </main>
      {selectedCreator && (
        <UpvoteModal creator={selectedCreator} closeModal={closeUpvoteModal} />
      )}
      {isFilterOpen && (
        <FilterOptions setFilterOption={setFilterOption} closeFilter={() => setIsFilterOpen(false)} />
      )}
    </div>
  )
}