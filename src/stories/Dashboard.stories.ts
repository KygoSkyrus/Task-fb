import Dashboard from '../components/Dashboard.vue';

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
};

export const Default = () => ({
  components: { Dashboard },
  template: '<Dashboard />',
});
