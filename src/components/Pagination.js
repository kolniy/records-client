import React from "react"

const Pagination = ({ recordsPerPage, totalRecords, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++){
        pageNumbers.push(i)
    }

    const hanleOnClick = (e, number) => {
        e.preventDefault()
        paginate(number)
    }

    return (
<div className="container">
 <nav className="mb-5" aria-label="Page navigation">
  <ul className="pagination">
        {
            pageNumbers.map((number) => (
                <li key={number} className="page-item"><a className="page-link" onClick={(e) => hanleOnClick(e, number)} href="!#">{number}</a></li>
            ))
        }
  </ul>
  </nav>
</div>
    )
}

export default Pagination
