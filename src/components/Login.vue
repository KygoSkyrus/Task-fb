<template>
  <fieldset class="grid gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
    <div class="space-y-2 col-span-full lg:col-span-1">
      <h2 class="text-bold text-2xl text-gray-800">Login</h2>
    </div>
    <div class="flex flex-col">
      <div class="">
        <label for="email" class="text-sm text-gray-800">Enter your email</label>
        <input id="email" v-model="email" type="email" placeholder="Email id"
          class="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-4 px-6">
      </div>
      <div class="my-2">
        <label for="password" class="text-sm text-gray-800">Enter Password</label>
        <input id="password" v-model="password" type="password" placeholder="Password"
          class="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-4 px-6">
      </div>
      <button @click="login" class="btn">Login</button>
    </div>
  </fieldset>

  <div class="credentials">
    <section>Test User Credentials</section>
    <section>Email: <u>user123@email.com</u></section>
    <section>Password: <u>user123</u></section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
        userStore.setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        router.push('/dashboard');
      } catch (error) {
        console.error("Login failed:", error);
      }
    };

    return { email, password, login };
  }
});
</script>

<style scoped>
  .credentials {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>