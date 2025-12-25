export interface Transaction {
  id: string;
  customerId: string;
  amount: number;
  currency: 'USD';
  status: 'pending' | 'success' | 'failed' | 'refunded';
  paymentMethod: 'card' | 'bank';
  createdAt: string;
}
