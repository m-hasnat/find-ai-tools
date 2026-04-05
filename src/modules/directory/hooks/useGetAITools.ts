import { useQuery } from '@apollo/client/react';
import { getAITools } from '../queries/getAITools';
import { AITool } from '../types/AITools';

interface AIToolsQueryResult {
  aiTools: AITool[];
}

export const useGetAITools = (variables: {
  search?: string | null;
  category?: string | null;
  sort?: string | null;
}) => {
  const { data, loading, error } = useQuery<AIToolsQueryResult>(getAITools, {
    variables,
  });

  return {
    tools: data?.aiTools ?? [],
    loading,
    error,
  };
};
