import { labelSelector } from '../labelSelector';

describe('labelSelector function', () => {
  it('should return the correct label for the title passed in', () => {
    expect(labelSelector('companyName')).toBe('Name')
    expect(labelSelector('country')).toBe('Country')
    expect(labelSelector('creationDay')).toBe('Creation date')
    expect(labelSelector('customers')).toBe('Number of customers')
    expect(labelSelector('sector')).toBe('sector')
  });
});