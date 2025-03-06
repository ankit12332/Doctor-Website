import { siteConfig as defaultConfig } from '@/config/siteConfig';

const CONFIG_KEY = 'Healtrate.ai_site_config';

/**
 * Get the current site configuration
 * Merges the default config with any saved changes
 */
export const getConfig = (): typeof defaultConfig => {
  if (typeof window === 'undefined') {
    return defaultConfig; // Return default config on server-side
  }

  try {
    const savedConfig = localStorage.getItem(CONFIG_KEY);
    if (!savedConfig) {
      return defaultConfig;
    }

    // Deep merge the saved config with the default config
    return deepMerge(defaultConfig, JSON.parse(savedConfig));
  } catch (error) {
    console.error('Error loading configuration:', error);
    return defaultConfig;
  }
};

/**
 * Save configuration changes
 */
export const saveConfig = (config: typeof defaultConfig): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
      console.log('Configuration saved successfully');
      resolve();
    } catch (error) {
      console.error('Error saving configuration:', error);
      reject(error);
    }
  });
};

/**
 * Reset configuration to defaults
 */
export const resetConfig = (): Promise<void> => {
  return new Promise((resolve) => {
    try {
      localStorage.removeItem(CONFIG_KEY);
      console.log('Configuration reset to defaults');
      resolve();
    } catch (error) {
      console.error('Error resetting configuration:', error);
      resolve(); // Still resolve to prevent breaking the flow
    }
  });
};

/**
 * Export configuration as JSON
 */
export const exportConfig = (): string => {
  const config = getConfig();
  return JSON.stringify(config, null, 2);
};

/**
 * Import configuration from JSON
 */
export const importConfig = (jsonConfig: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const config = JSON.parse(jsonConfig);
      saveConfig(config).then(resolve).catch(reject);
    } catch (error) {
      console.error('Error importing configuration:', error);
      reject(error);
    }
  });
};

/**
 * Deep merge two objects
 */
const deepMerge = (target: any, source: any): any => {
  const output = { ...target };
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  
  return output;
};

/**
 * Check if value is an object
 */
const isObject = (item: any): boolean => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

export default {
  getConfig,
  saveConfig,
  resetConfig,
  exportConfig,
  importConfig
}; 