import React from 'react'

export const Characters = ({ results } : any) => {

  return (
    <div className='row conteiner'>
        {results && results.map((result: Result,index:number) => (
          <div className="col" key={index}>
            <div className="card characters animate__animated animate__fadeInUp" key={result.id}>
              <a href="">
                <img className="card-img-top" src={result.image} alt={result.name} />
                <div className="card-body">
                  <h5 className="card-title">{result.name}</h5>
              <p>{result.status} - {result.species}</p>
                </div>
              </a>
            </div>
          </div>
        ))}</div>
  )
}

