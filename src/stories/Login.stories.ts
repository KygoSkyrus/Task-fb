import Login from '../components/Login.vue';

export default {
  title: 'Pages/Login',
  component: Login,
};

export const Default = () => ({
  components: { Login },
  template: '<Login />',
});
