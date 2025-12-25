export type UserRole = 'admin' | 'member';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  status: 'active' | 'suspended';
  createdAt: string; // ISO string
}
