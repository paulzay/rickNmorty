import React, { useState } from 'react'

interface SearchProps {
  searchText: string;
  setSearchText: (text: string) => void;
}
function Search({ searchText, setSearchText }: SearchProps) {

  return (
    <div className='flex justify-between items-center'>
      <h2>The Rick and Morty API</h2>
      <input type='text' placeholder='Search' alt='searchbox' className='p-2 text-black'
        value={searchText} onChange={(e) => setSearchText(e.target.value)} autoFocus />
    </div>
  )
}

export default Search