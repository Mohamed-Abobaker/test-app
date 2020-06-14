export const labelSelector = title => {
  const labels = {
    'companyName': 'Name', 'country': 'Country', 'creationDay': 'Creation date', 'customers': 'Number of customers', 'sector': 'sector'
  }
  return labels[title]
}