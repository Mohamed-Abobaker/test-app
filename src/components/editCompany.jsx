import React, { useState } from 'react';
import { labelSelector } from '../helpers/labelSelector';

function EditCompany({ updateCompanies, company, index, companies, updateCompanyIndex }) {
  const [selectedCompany, updateSelectedCompany] = useState({ ...company })

  return (
    <div>
      <form onSubmit={() => {
        const updatedCompanies = [...companies];
        updatedCompanies[index] = selectedCompany
        updateCompanies(updatedCompanies)
        updateCompanyIndex(null)
      }}>
        {['companyName', 'country', 'creationDay', 'sector'].map(info => {
          return (
            <label key={info}>
              {labelSelector(info)}:
          <input required type={info === 'creationDay' ? 'date' : "text"} value={selectedCompany[info]} onChange={e => updateSelectedCompany({ ...selectedCompany, [info]: e.target.value })} />
            </label>
          )
        })}
        <label>
          Number of customers:
        <input required type={'number'} min={0} value={selectedCompany.customers} onChange={e => updateSelectedCompany({ ...selectedCompany, customers: e.target.value })} />
        </label>
        <label>
          Active:
      <select value={selectedCompany.active} onChange={e => updateSelectedCompany({ ...selectedCompany, active: e.target.value })}>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </label>
        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EditCompany;