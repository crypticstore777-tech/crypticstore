/**
 * Sync Service
 * Orchestrates syncing between Printful, Shopify, and local database
 */

import { syncPrintfulProductsToDatabase } from './printful';
import { syncShopifyProductsToDatabase } from './shopify';

export interface SyncConfig {
  syncInterval: number; // in minutes
  enableAutoSync: boolean;
  syncSources: ('printful' | 'shopify')[];
}

let syncTimer: NodeJS.Timeout | null = null;

/**
 * Initialize auto-sync based on configuration
 */
export function initializeAutoSync(config: SyncConfig): void {
  if (!config.enableAutoSync) {
    console.log('Auto-sync is disabled');
    return;
  }

  // Run initial sync
  performSync(config.syncSources);

  // Set up periodic sync
  const intervalMs = config.syncInterval * 60 * 1000;
  syncTimer = setInterval(() => {
    performSync(config.syncSources);
  }, intervalMs);

  console.log(`Auto-sync initialized with ${config.syncInterval} minute interval`);
}

/**
 * Stop auto-sync
 */
export function stopAutoSync(): void {
  if (syncTimer) {
    clearInterval(syncTimer);
    syncTimer = null;
    console.log('Auto-sync stopped');
  }
}

/**
 * Perform sync from specified sources
 */
export async function performSync(sources: ('printful' | 'shopify')[] = ['printful', 'shopify']): Promise<{
  success: boolean;
  results: Record<string, any>;
  error?: string;
}> {
  try {
    console.log(`Starting sync from sources: ${sources.join(', ')}`);
    const results: Record<string, any> = {};
    const startTime = Date.now();

    if (sources.includes('printful')) {
      try {
        results.printful = await syncPrintfulProductsToDatabase();
        console.log('✓ Printful sync completed');
      } catch (error) {
        console.error('✗ Printful sync failed:', error);
        results.printful_error = error;
      }
    }

    if (sources.includes('shopify')) {
      try {
        results.shopify = await syncShopifyProductsToDatabase();
        console.log('✓ Shopify sync completed');
      } catch (error) {
        console.error('✗ Shopify sync failed:', error);
        results.shopify_error = error;
      }
    }

    const duration = Date.now() - startTime;
    console.log(`Sync completed in ${duration}ms`);

    return {
      success: true,
      results,
    };
  } catch (error) {
    console.error('Sync failed:', error);
    return {
      success: false,
      results: {},
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get sync configuration from environment
 */
export function getSyncConfig(): SyncConfig {
  return {
    syncInterval: parseInt(import.meta.env.VITE_SYNC_INTERVAL_MINUTES || '60', 10),
    enableAutoSync: import.meta.env.VITE_ENABLE_AUTO_SYNC === 'true',
    syncSources: ['printful', 'shopify'],
  };
}
