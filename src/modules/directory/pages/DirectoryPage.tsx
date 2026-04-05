import React from 'react';
import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import { SearchBar } from '../components/SearchBar';
import { SortToggle } from '../components/SortToggle';
import { ToolList } from '../components/ToolList';
import { useAITools } from '../hooks/useAITools';

export const DirectoryPage = () => {
  const { toolCount } = useAITools();

  return (
    <Box minH="100vh" bg="#d1e7e877" py={10}>
      <Box maxW="1100px" mx="auto" px={4}>
        <VStack gap={6} align="stretch">
          <Heading textAlign="center">🔍 Find AI Tools</Heading>
          <HStack w="100%">
            <SearchBar />
            <SortToggle />
          </HStack>
          <Text fontSize="sm" color="gray.500">{toolCount} tools found</Text>
          <ToolList />
        </VStack>
      </Box>
    </Box>
  );
};