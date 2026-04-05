import React from 'react';
import { Grid, Text, Spinner } from '@chakra-ui/react';
import { ToolCard } from './ToolCard';
import { useAITools } from '../hooks/useAITools';

export const ToolList = () => {
  const { tools, loading, error, toolCount } = useAITools();

  if (loading) return <Spinner />;
  if (error) return <Text>Error loading tools</Text>;
  if (toolCount === 0) return <Text>No tools found</Text>;

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={4}
      w="100%"
      alignItems="start"
    >
      {tools.map((tool) => (
        <ToolCard key={tool.name} tool={tool} />
      ))}
    </Grid>
  );
};