// App configuration for cross-linking
export const APP_CONFIG = {
  // Main app URL - update this based on environment
  mainAppUrl: import.meta.env.VITE_MAIN_APP_URL || 'http://localhost:3001',
  
  // Routes
  routes: {
    signup: '/sign-up',
    signin: '/sign-in',
    dashboard: '/',
    demo: '/demo',
  },
  
  // Helper to get full URL
  getMainAppUrl: (path: string = '') => {
    const baseUrl = import.meta.env.VITE_MAIN_APP_URL || 'http://localhost:3001';
    return `${baseUrl}${path}`;
  }
};
