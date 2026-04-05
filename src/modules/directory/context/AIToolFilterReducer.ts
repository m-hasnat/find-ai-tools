import { AIToolFilters, SortOption } from '../types/AITools';

export type AIToolFilterAction =
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'SET_SORT'; payload: SortOption }
  | { type: 'RESET' };

export const initialAIToolFilterState: AIToolFilters = {
  search: '',
  category: '',
  sort: 'none',
};

export const aiToolFilterReducer = (
  state: AIToolFilters,
  action: AIToolFilterAction
): AIToolFilters => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    case 'RESET':
      return initialAIToolFilterState;
    default:
      return state;
  }
};
