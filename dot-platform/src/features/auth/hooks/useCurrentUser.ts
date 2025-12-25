import { useEffect, useState } from 'react';
import type { User } from '../types/user';
// import { useCurrentUser, User } from "@/features/auth";
import { mockUser } from '../api/user.mock';

export const useCurrentUser = () => {
  const [user, setUSer] = useState<User | null>(null);

  useEffect(() => {
    setUSer(mockUser);
  }, []);

  return user;
};
