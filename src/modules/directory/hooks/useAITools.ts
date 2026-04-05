import { useMemo } from 'react';
import { useAIToolFilters } from '../context/AIToolFilterContext';
import { useGetAITools } from './useGetAITools';

export const useAITools = () => {
  const { filters, dispatch } = useAIToolFilters();

  const { tools, loading, error } = useGetAITools({
    search: filters.search || null,
    category: filters.category || null,
    sort: filters.sort === 'none' ? null : filters.sort,
  });

  const toolCount = useMemo(() => tools.length, [tools]);

  return {
    tools,
    loading,
    error,
    filters,
    dispatch,
    toolCount,
  };
};
