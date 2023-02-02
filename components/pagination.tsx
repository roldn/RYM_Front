import React from "react"

export const Pagination = ({ setPage, page }: any) => {

  const next = () => { setPage({ ...page, current: page?.next }) };
  const previous = () => { setPage({ ...page, current: page?.prev }) };

  const regex:RegExp = /\d/g;
  const currentNumberPage:any = page.current.match(regex) || 1

  return (
    <div className="pagination justify-content-center gap-4 my-4">
      <button onClick={previous} type="button" className="btn btn-primary">
        Previous
      </button>
      <p>Page {currentNumberPage} of {page.pages}</p>
      <button onClick={next} type="button" className="btn btn-primary">
        Next
      </button>
    </div>
  )
}