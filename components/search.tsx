import React from 'react'

export const Search = ({ setPage, page}: any) => {

  const defaultEndpoint:string ="https://rickandmortyapi.com/api/character/";
  let name:string = '';

  const handleChange = (e:any) => {
    e.preventDefault()
    name = e.target.value;
  }

  const handleSubmit = (e: any) => {
    (/\?/.test(page.current)) ? (
        (/&name=/.test(page.current)) ?
            setPage({ ...page, current: (defaultEndpoint + `?page=1&name=${name}`) })
            :
            ((/name=/.test(page.current)) ?
                setPage({ ...page, current: (defaultEndpoint + `?page=1&name=${name}`) })
                :
                setPage({ ...page, current: (defaultEndpoint + `?page=1&name=${name}`)}) )
    ) : setPage({ ...page, current: (defaultEndpoint + `?page=1&name=${name}`) });
};

  return (
    <>
      <form>
        <input type="text" placeholder='Search...' className='form-control co' onChange={handleChange}/>
        <button type="button" onClick={handleSubmit}>Send</button>
      </form>
    </>
  )
}
