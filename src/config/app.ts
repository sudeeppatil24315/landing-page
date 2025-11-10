// App configuration for cross-linking
export const APP_CONFIG = {
  // Main app URL - update this based on environment
  mainAppUrl: (import.meta as any).env?.VITE_MAIN_APP_URL || 'https://ai-mock-interview-seven-woad.vercel.app',
  
  // Routes
  routes: {
    signup: '/sign-up',
    signin: '/sign-in',
    dashboard: '/',
    demo: '/demo',
  },
  
  // Helper to get full URL
  getMainAppUrl: (path: string = '') => {
    const baseUrl = (import.meta as any).env?.VITE_MAIN_APP_URL || 'https://ai-mock-interview-seven-woad.vercel.app';
    return `${baseUrl}${path}`;
  }
};
