import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAIToolFilters } from '../context/AIToolFilterContext';

export const SortToggle = () => {
  const { filters, dispatch } = useAIToolFilters();
  const isSorted = filters.sort === 'name';

  return (
    <Button
      onClick={() =>
        dispatch({
          type: 'SET_SORT',
          payload: isSorted ? 'none' : 'name',
        })
      }
    >
      {isSorted ? 'Sorted A-Z ✓' : 'Sort A-Z'}
    </Button>
  );
};
