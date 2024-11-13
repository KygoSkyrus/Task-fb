<template>
  <div class="flex flex-col items-center">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <input type="email" v-model="email" placeholder="Email" class="input" />
    <input type="password" v-model="password" placeholder="Password" class="input" />
    <button @click="login" class="btn">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useUserStore } from '../store';

export default defineComponent({
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const userStore = useUserStore();

    const login = async () => {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email.value, password.value);

        console.log('usrouther',router)
        userStore.setUser(user);
        router.push('/dashboard');
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    return { email, password, login };
  }
});
</script>
