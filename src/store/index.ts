import { defineStore } from 'pinia';
import { auth } from '../firebase';
import { User } from 'firebase/auth';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
    async logout() {
      await auth.signOut();
      this.user = null;
    }
  },
});
