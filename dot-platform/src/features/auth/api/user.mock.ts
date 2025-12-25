import type { User } from '../types/user';

export const mockUser: User = {
  id: 'string',
  email: 'string',
  role: 'admin',
  createdAt: new Date().toISOString(),
  status: 'active',
};
