<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
      <div v-if="user">
        <p>User ID: {{ user.uid }}</p>
        <p>Email: {{ user.email }}</p>
        <button @click="logout" class="btn mt-4">Logout</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useUserStore } from '../store';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    setup() {
      const userStore = useUserStore();
      const router = useRouter();
  
      onMounted(() => {
        if (!userStore.user) {
          router.push('/');
        }
      });
  
      const logout = async () => {
        await userStore.logout();
        router.push('/');
      };
  
      return { user: userStore.user, logout };
    }
  });
  </script>
  