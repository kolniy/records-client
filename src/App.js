import React, { useState, useEffect } from "react"
import axios from "axios"
import './App.css';
import Navbar from "./components/Navbar"
import Filters from "./components/Filters"
import Patient from "./components/Patient"
import Pagination from "./components/Pagination"

import filterRecords from "./utilities/filterRecords"

function App() {

  const [ records, setRecords ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ recordsPerPage ] = useState(20)
  const [ filterCri, updateFilCri  ] = useState('')
  const [ filters, updateFilter] = useState({
    filterQuery:'',
    searchText:''
  })

  const updateFilterText = (text) => {
      updateFilter({
        ...filters,
        filterQuery: text
      })
  }

  const updateSearch = (text) => {
    updateFilter({
      ...filters,
      searchText: text
    })
  }

  useEffect(() => {
    getRecords()
  }, [])
  
  // Get Current records
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecords = indexOfLastRecord - recordsPerPage
  const currentRecords = filterRecords(records, filters, filterCri ).slice(indexOfFirstRecords, indexOfLastRecord)

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const getRecords = async () => {
    try {
      setIsLoading(true)
      const apiUrl = 'http://api.enye.tech/v1/challenge/records'
      const proxy = "https://cors-anywhere.herokuapp.com/"
      const recordsData = await axios.request({
        method: 'get',
        url: proxy + apiUrl
      }) 
      setRecords(recordsData.data.records.profiles)
      setIsLoading(false)
    } catch (error) {
        alert('Cannot Fetch Records At this time.')
        setIsLoading(false)
        console.log(error)
    }
  }

  return (<>
  <Navbar />
  <Filters filterCri={filterCri} updateFilCri={updateFilCri} filters={filters} updateFilterText={updateFilterText} updateSearch={updateSearch} />
  <Patient isLoading={isLoading} records={currentRecords} />
  <Pagination recordsPerPage={recordsPerPage} totalRecords={filterRecords(records, filters, filterCri ).length} paginate={paginate} />
    </>
  );
}

export default App;
