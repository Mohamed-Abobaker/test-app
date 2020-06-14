import React from 'react';
import { shallow } from 'enzyme';
import EditCompany from '../editCompany';

describe('EditCompany.jsx tests', () => {
  it('should render the correct component', () => {
    const wrapper = shallow(<EditCompany />)

    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('should call correct function when form is submitted', () => {
    const mockFunc = jest.fn();
    const mockFunc1 = jest.fn();
    const updateFromMock = jest.fn();

    const wrapper = shallow(<EditCompany updateCompanies={mockFunc} company={{ companyName: '', sector: '', creationDay: '', country: '', customers: 0, active: false }} index={0} companies={[{ companyName: '', sector: '', creationDay: '', country: '', customers: 0, active: false }, {}, {}]} updateCompanyIndex={mockFunc1} />)
    const forms = wrapper.find('form');
    forms.at(0).props().onSubmit()

    expect(mockFunc).toHaveBeenCalled()
    expect(mockFunc1).toHaveBeenCalled()
  });
});