import React from 'react';
import { shallow } from 'enzyme';
import AddCompany from '../addCompany';

describe('AddCompany.jsx tests', () => {
  it('should render the correct component', () => {
    const wrapper = shallow(<AddCompany />)

    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('should call correct function when cancel button is clicked', () => {
    const mockFunc = jest.fn();

    const wrapper = shallow(<AddCompany updateIsFormOpen={mockFunc} />);
    const buttons = wrapper.find('button');
    buttons.at(1).props().onClick()

    expect(mockFunc).toHaveBeenCalled();
  });
  it('should call correct function when form is submitted', () => {
    const mockFunc = jest.fn();
    const mockFunc1 = jest.fn();
    const updateFromMock = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([{ companyName: 'name', sector: 'it', creationDay: '01-01-2001', country: 'UK', customers: 0, active: false },
      updateFromMock]);

    const wrapper = shallow(<AddCompany updateCompanies={mockFunc} companies={[{}]} updateIsFormOpen={mockFunc1} />);
    const forms = wrapper.find('form');
    forms.at(0).props().onSubmit({ preventDefault: () => { } })

    expect(mockFunc).toHaveBeenCalledWith([{}, {
      "active": false, "companyName": "name", "country": "UK", "creationDay":
        "01-01-2001", "customers": 0, "sector": "it"
    }]);
    expect(mockFunc1).toHaveBeenCalledWith(false)
  });
});