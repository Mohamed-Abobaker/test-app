import React from 'react';
import { labelSelector } from '../helpers/labelSelector';

function AddCompany({ updateCompanies, companies, updateIsFormOpen }) {
  const [newCompany, updateNewCompany] = React.useState({ companyName: '', sector: '', creationDay: '', country: '', customers: 0, active: false })

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        updateCompanies([...companies, newCompany])
        updateIsFormOpen(false)
      }}>
        {['companyName', 'country', 'creationDay', 'sector'].map(info => {
          return (
            <div key={info}>
              <label >
                {labelSelector(info)}:
              <input required type={info === 'creationDay' ? 'date' : 'text'} value={newCompany[info]} onChange={e => updateNewCompany({ ...newCompany, [info]: e.target.value })} />
              </label>
            </div>
          )
        })}
        <label>
          Number of customers:
        <input required type={'number'} min={0} value={newCompany.customers} onChange={e => updateNewCompany({ ...newCompany, customers: e.target.value })} />
        </label>
        <label>
          Active:
        <select value={newCompany.active} onChange={e => updateNewCompany({ ...newCompany, active: e.target.value })}>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </label>
        <div>
          <button type="submit">Add</button>
          <button onClick={() => updateIsFormOpen(false)}>Cancel</button>
        </div>

      </form>
    </div>
  )
}

export default AddCompany;