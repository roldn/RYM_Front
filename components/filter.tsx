import React from "react";

export const Filter = ({ page, setPage }: any) => {

    let filter: string = ''
    const setFilter = (e: any) => { filter = e.target.value }

    const handleGender = (e: any) => {
        const genderOption: string = e.target.value;
        (/\?/.test(page.current)) ? (
            (/&gender=/.test(page.current)) ?
                setPage({ ...page, current: (page.current.replace(/(male|female|genderless|unknown)/i, `${genderOption}`)) })
                :
                ((/gender=/.test(page.current)) ?
                    setPage({ ...page, current: (page.current.replace(/(male|female|genderless|unknown)/i, `${genderOption}`)) })
                    :
                    setPage({ ...page, current: (page.current + `&gender=${genderOption}`) }))
        ) : setPage({ ...page, current: (page.current + `?gender=${genderOption}`) });
    };

    const handleStatus = (e: any) => {
        const statusOption: string = e.target.value;
        (/\?/.test(page.current)) ? (
            (/&status=/.test(page.current)) ?
                setPage({ ...page, current: (page.current.replace(/(dead|alive|unknown)/i, `${statusOption}`)) })
                :
                (/status=/.test(page.current)) ?
                    setPage({ ...page, current: (page.current.replace(/(dead|alive|unknown)/i, `${statusOption}`)) })
                    :
                    setPage({ ...page, current: (page.current + `&status=${statusOption}`) })
        ) : setPage({ ...page, current: (page.current + `?status=${statusOption}`) });
    };

    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle show" type="button" value={"gender"} data-bs-toggle="dropdown" aria-expanded="true" onClick={setFilter}>
                    Gender
                </button>
                <ul className="dropdown-menu show" data-popper-placement="bottom-start">
                    <li><button className="dropdown-item" type="button" value={"male"} onClick={handleGender}>Male</button></li>
                    <li><button className="dropdown-item" type="button" value={"female"} onClick={handleGender}>Female</button></li>
                    <li><button className="dropdown-item" type="button" value={"genderless"} onClick={handleGender}>Genderless</button></li>
                    <li><button className="dropdown-item" type="button" value={"unknown"} onClick={handleGender}>Unknown</button></li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle show" type="button" value={"status"} data-bs-toggle="dropdown" aria-expanded="true" onClick={setFilter}>
                    Status
                </button>
                <ul className="dropdown-menu show" data-popper-placement="bottom-start">
                    <li><button className="dropdown-item" type="button" value={"alive"} onClick={handleStatus}>Alive</button></li>
                    <li><button className="dropdown-item" type="button" value={"dead"} onClick={handleStatus}>Dead</button></li>
                    <li><button className="dropdown-item" type="button" value={"unknown"} onClick={handleStatus}>Unknown</button></li>
                </ul>
            </div>
        </>
    );
}