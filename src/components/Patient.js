import React from "react"

const Patient = ({ isLoading, records }) => {

    if(isLoading){
        return <><div className="container"><p className="lead mt-4 mb-4 text-center">Loading...</p></div> </>
    }

    if(records.length === 0){
        return <><div className="container"><p className="lead mt-4 mb-4 text-center">No Record Found</p></div> </>
    }

    return <>
   <div className="container mt-4 mb-5">
    <div className="accordion" id="recordsAccordion">
        {
         records.map((record) => <>
    <div key={record.UserName} className="card">
    <div className="card-header" id={`${record.MacAddress}`}>
      <h2 className="mb-0">
        <button className="btn btn-block text-left patient-heading" type="button" data-toggle="collapse" data-target={`#${record.UserName}`} aria-expanded="false" aria-controls={`${record.UserName}`}>
          {`${record.FirstName} ${record.LastName}`}  <div style={{float:"right"}} type="button" className="btn btn-default" data-toggle="tooltip" data-placement="top" title={`Click here for more info about ${record.FirstName}`}>
                ...
            </div>
        </button>
      </h2>
    </div>
    <div key={record.UserName} id={`${record.UserName}`} className="collapse" aria-labelledby={`${record.MacAddress}`} data-parent="#recordsAccordion">
      <div className="card-body">
        {
            record.FirstName
        }
      </div>
    </div>
  </div>
            </>)
        }
    </div>
</div>
    </>
}

export default Patient

