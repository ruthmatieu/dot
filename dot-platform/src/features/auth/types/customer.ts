export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  status: 'active' | 'expired';
  createdAt: string;
}
