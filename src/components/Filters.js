import React from "react"

const AppFilters = ({ filterCri, updateFilCri, filters, updateFilterText, updateSearch }) => {
    const { filterQuery, searchText } = filters

    const handleDropDownChange = (e) => {
        updateFilCri(e.target.value)
    }

    const handleFilterTextChange = (e) => {
        updateFilterText(e.target.value)
    }

    const handleSearchTextChange = (e) => {
        updateSearch(e.target.value)
    }

    return <>
        <div className="filters-section">
            <div className="container">
        <div className="row">
            <div className="col-sm-7"> 
                <div className="dropdown-section"> 
                    <div className="dropdown-container">
            <form className="form-inline" onSubmit={e => { e.preventDefault()}}>
            <label className="my-1 mr-2">Filter By:</label>
        <select value={filterCri} className="custom-select my-1 mr-sm-2"
         onChange={handleDropDownChange} 
        id="inlineFormCustomSelectPref">
            <option value="">Select A Query Criteria</option>
            <option value="Gender">Gender</option>
            <option value="PaymentMethod">Payment Method</option>
        </select>

            <label className="sr-only">Filter Text</label>
                <input type="text" value={filterQuery} onChange={e => handleFilterTextChange(e)} className="form-control" placeholder="Filter text. e.g Female, Visa, Mastercard" />
            </form>
        </div>
                </div>
            </div>
            <div className="col-sm-5">
                <div className="searchname-section">
                <h5>Search Patient By Firstname</h5>
                <input type="text" value={searchText} onChange={e => handleSearchTextChange(e)} className="form-control mb-2 mr-sm-2" placeholder="Search User By FirstName" />
                </div>
            </div>
        </div>
            </div>
        </div>
    </>
}

export default AppFilters