import type { Transaction } from '../types/transaction';

export const mockTransaction: Transaction = {
  id: 't6894',
  customerId: 'c83489',
  amount: 3500,
  currency: 'USD',
  status: 'pending',
  paymentMethod: 'card',
  createdAt: new Date().toISOString(),
};
