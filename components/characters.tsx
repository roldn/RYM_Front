import React from 'react'

export const Characters: React.FC<{ characters: CharactersResult["results"] }> = ({ characters }) => {

  return (

    <div className='row conteiner'>
      {characters.map((char: any) => (
        <div className="col">
          <div className="card characters" key={char.id}>
            <img className="card-img-top" src={char.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{char.name}</h5>
              <p className="card-text">{char.species} <br /> {char.dimension}</p>
            </div>
          </div>
        </div>
      ))}</div>
  )
}

