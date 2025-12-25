import type { Customer } from '../types/customer';

export const mockCustomer: Customer = {
  id: 'c83489',
  firstName: 'Jeremy',
  lastName: 'Myers',
  email: 'jeremymyers@gmail.com',
  status: 'active',
  createdAt: new Date().toISOString(),
};
