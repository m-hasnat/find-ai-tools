import React, { createContext, useContext, useReducer } from 'react';
import { AIToolFilters } from '../types/AITools';
import {
  AIToolFilterAction,
  aiToolFilterReducer,
  initialAIToolFilterState,
} from './AIToolFilterReducer';

interface AIToolFilterContextType {
  filters: AIToolFilters;
  dispatch: React.Dispatch<AIToolFilterAction>;
}

const AIToolFilterContext = createContext<AIToolFilterContextType | null>(null);

export const AIToolFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, dispatch] = useReducer(
    aiToolFilterReducer,
    initialAIToolFilterState
  );

  return (
    <AIToolFilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </AIToolFilterContext.Provider>
  );
};

export const useAIToolFilters = (): AIToolFilterContextType => {
  const context = useContext(AIToolFilterContext);
  if (!context) {
    throw new Error('useAIToolFilters must be used within AIToolFilterProvider');
  }
  return context;
};
