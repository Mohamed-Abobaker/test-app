import React from 'react';
import { shallow } from 'enzyme';
import DisplayCompanies from '../displayCompanies';

describe('DisplayCompanies.jsx tests', () => {
  it('should render the correct component', () => {
    const wrapper = shallow(<DisplayCompanies company={{}} index={0} updateCompanyIndex={() => { }} updateCompanies={() => { }} companies={[]} />)

    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('should call correct function when update button is clicked', () => {
    const mockFunc = jest.fn();

    const wrapper = shallow(<DisplayCompanies company={{}} index={0} updateCompanyIndex={mockFunc} updateCompanies={() => { }} companies={[]} />)
    const buttons = wrapper.find('button')
    buttons.at(0).props().onClick();

    expect(mockFunc).toHaveBeenCalled();
  });
  it('should call the correct function when the remove button is clicked', () => {
    const mockFunc = jest.fn();

    const wrapper = shallow(<DisplayCompanies company={{}} index={0} updateCompanyIndex={() => { }} updateCompanies={mockFunc} companies={[{}]} />)
    const buttons = wrapper.find('button')
    buttons.at(1).props().onClick();

    expect(mockFunc).toHaveBeenCalled();
  });
});