import React, { useState } from 'react';
import './App.css';
import companiesJson from './companies.json'
import EditCompany from './components/editCompany';
import DisplayCompanies from './components/displayCompanies';
import AddCompany from './components/addCompany';

function App() {
  const [companies, updateCompanies] = useState([...companiesJson])
  const [companyEditIndex, updateCompanyIndex] = useState(null)
  const [isFormOpen, updateIsFormOpen] = useState(false);

  const sortByAlphabet = (ascending) => updateCompanies([...companies].sort(function (a, b) {
    if (ascending) return a.companyName.localeCompare(b.companyName)
    return b.companyName.localeCompare(a.companyName)
  }))

  const removeFirstLastCompany = (first) => {
    const updatedArr = [...companies];
    if (first) {
      console.log(companies[0])
      updatedArr.shift();
      updateCompanies(updatedArr)
    } else {
      console.log(companies[companies.length - 1])
      updatedArr.pop();
      updateCompanies(updatedArr)
    }
  }

  return (
    <div className="App">
      {companies.length ? null : (<h3>No companies available at this time</h3>)}
      <div className="div">
        {companies.length && companyEditIndex === null && (<div>
          <button onClick={() => sortByAlphabet(true)}>sort a-z</button>
          <button onClick={() => sortByAlphabet(false)}>sort z-a</button>
          <button onClick={() => removeFirstLastCompany(true)}>Remove first company</button>
          <button onClick={() => removeFirstLastCompany(false)}>Remove last company</button>
        </div>)}
        {companies.map((company, index) => {
          return (
            <div key={index + company.companyName}>
              {(companyEditIndex === index
                ? <EditCompany updateCompanyIndex={updateCompanyIndex} updateCompanies={updateCompanies} company={company} index={index} companies={companies} /> : (<DisplayCompanies updateCompanyIndex={updateCompanyIndex} updateCompanies={updateCompanies} company={company} index={index} companies={companies} />))}
            </div>
          )
        })}
      </div>
      <div className="div">
        {isFormOpen ? <AddCompany companies={companies} updateCompanies={updateCompanies} updateIsFormOpen={updateIsFormOpen} />
          : <button onClick={() => updateIsFormOpen(true)}>Add new company</button>}
      </div>
    </div>
  );
}

export default App;
