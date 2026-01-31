// Centralized API base URL for backend (configurable via Vercel env var)
export const API_BASE = 'https://mern-vercel-netlify-imhj.vercel.app/';

// Helper to build URLs consistently
export const apiUrl = (path = '') => `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
