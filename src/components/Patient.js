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
    <div id={`${record.UserName}`} className="collapse" aria-labelledby={`${record.MacAddress}`} data-parent="#recordsAccordion">
      <div className="card-body">
            <p className="individual-patient">Gender: <span>{record.Gender}</span></p>
            <p className="individual-patient">Email: <span>{record.Email}</span></p>
            <p className="individual-patient">Domain Name: <span>{record.DomainName}</span></p>
            <p className="individual-patient">Phone Number: <span>{record.PhoneNumber}</span></p>
            <p className="individual-patient">Mac Address: <span>{record.MacAddress}</span></p>
            <p className="individual-patient">URL: <span>{record.URL}</span></p>
            <p className="individual-patient">Username: <span>{record.UserName}</span></p>
            <p className="individual-patient">Last Seen: <span>{record.LastLogin}</span></p>
            <p className="individual-patient">Payment Method: <span>{record.PaymentMethod}</span></p>
            <p className="individual-patient">Location: <span> Latitude:{" "}{`"${record.Latitude}"`} Longitude:{" "}{`"${record.Longitude}"`}</span></p>
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

