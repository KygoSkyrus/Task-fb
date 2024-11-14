<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
    <div v-if="user">
      <p>User ID: <u>{{ user.uid }}</u></p>
      <p>Email: <u>{{ user.email }}</u></p>
      <button @click="logout" class="btn mt-4">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue';
import { useUserStore } from '../store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    onBeforeMount(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        userStore.setUser(JSON.parse(storedUser));
      }
    });

    const user = computed(() => userStore.user);

    if (!user.value) {
      router.push('/');
    }

    const logout = async () => {
      localStorage.removeItem("user");
      await userStore.logout();
      router.push('/');
    };

    return { user, logout };
  }
});
</script>