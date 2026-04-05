import React from 'react';
import { Input } from '@chakra-ui/react';
import { useAIToolFilters } from '../context/AIToolFilterContext';

export const SearchBar = () => {
  const { dispatch } = useAIToolFilters();

  return (
    <Input
      placeholder="Search AI tools..."
      bg="white"
      borderColor="gray.300"
      _hover={{ borderColor: 'gray.400' }}
      _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px teal' }}
      onChange={(e) =>
        dispatch({ type: 'SET_SEARCH', payload: e.target.value })
      }
    />
  );
};
