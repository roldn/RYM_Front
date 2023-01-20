
import React, { useState } from 'react'
import { Characters } from './characters';

export const Main: React.FC<{ characters: CharactersResult["results"] }> = ({ characters }) => {

  const [query, setQuery] = useState("");

  const search = (characters: CharactersResult["results"]) => {
    return characters.filter((char) =>
      char.name.toLowerCase().includes(query) ||
      char.species.toLowerCase().includes(query) ||
      char.gender.toLowerCase().includes(query) ||
      char.status.toLowerCase().includes(query)
    )
  }

  return (
    <>
      <div className="navbar">
        <div>
          <h1>Rick y Morty App</h1>
        </div>
        <div className='search'>
          <input type="text" placeholder='Search...' className="search" onChange={e => setQuery(e.target.value)} />
        </div>
      </div>
      <Characters characters={search(characters)} />
    </>
  )
}
