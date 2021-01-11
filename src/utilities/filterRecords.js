

const filterRecords = (records, filters, filterCri) => {
    const { filterQuery, searchText } = filters 

    const filteredData = records.filter((record) => {
        let isFilterMatch = true

    if(filterCri !== ""){
       isFilterMatch = record[filterCri].toLowerCase() === filterQuery.toLowerCase()
       } else {
           return isFilterMatch
       }

     return isFilterMatch

    }).filter((record) => {
        
        let isSearchMatch = true

        if(searchText !== ""){
            isSearchMatch = record.FirstName.toLowerCase().includes(searchText.toLowerCase())
        } else {
            return isSearchMatch
        }

        return isSearchMatch

    })

    return filteredData
}

export default filterRecords