import React from 'react';

function DisplayCompanies({ company, index, updateCompanyIndex, updateCompanies, companies }) {
  return (<div key={company.companyName + index}>
    <p>{company.companyName}</p>
    <button onClick={() => updateCompanyIndex(index)} >Update</button>
    <button
      onClick={() => updateCompanies([...companies.filter((com, ind) => index !== ind)])}
    >
      Remove
    </button>
  </div >
  )
}

export default DisplayCompanies;