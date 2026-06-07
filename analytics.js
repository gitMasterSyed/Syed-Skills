import { inject } from '@vercel/analytics';

/**
 * Initialize Vercel Web Analytics
 * 
 * Configuration:
 * - Automatically detects environment (development/production)
 * - Debug mode enabled in development for console logging
 * - Production mode uses optimized event tracking
 * 
 * Documentation: https://vercel.com/docs/analytics
 */
inject({
  mode: import.meta.env.MODE === 'development' ? 'development' : 'production',
  debug: import.meta.env.MODE === 'development',
});
