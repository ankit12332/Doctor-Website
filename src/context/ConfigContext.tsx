'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import configService from '@/services/configService';
import { siteConfig as defaultConfig } from '@/config/siteConfig';

type ConfigContextType = {
  config: typeof defaultConfig;
  updateConfig: (newConfig: typeof defaultConfig) => Promise<void>;
  resetConfig: () => Promise<void>;
  exportConfig: () => string;
  importConfig: (jsonConfig: string) => Promise<void>;
  isLoading: boolean;
};

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<typeof defaultConfig>(defaultConfig);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load configuration on client-side only
    if (typeof window !== 'undefined') {
      const loadedConfig = configService.getConfig();
      setConfig(loadedConfig);
      setIsLoading(false);
    }
  }, []);

  const updateConfig = async (newConfig: typeof defaultConfig) => {
    setIsLoading(true);
    try {
      await configService.saveConfig(newConfig);
      setConfig(newConfig);
    } catch (error) {
      console.error('Error updating configuration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetConfig = async () => {
    setIsLoading(true);
    try {
      await configService.resetConfig();
      setConfig(defaultConfig);
    } catch (error) {
      console.error('Error resetting configuration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportConfig = () => {
    return configService.exportConfig();
  };

  const importConfig = async (jsonConfig: string) => {
    setIsLoading(true);
    try {
      await configService.importConfig(jsonConfig);
      const loadedConfig = configService.getConfig();
      setConfig(loadedConfig);
    } catch (error) {
      console.error('Error importing configuration:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ConfigContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        exportConfig,
        importConfig,
        isLoading
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export default ConfigContext; 