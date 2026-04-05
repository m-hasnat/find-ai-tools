export interface AITool {
  name: string;
  description: string;
  category: string;
  url: string;
  docsUrl?: string;
  icon?: string;
  pricing?: string;
  apiAvailable?: boolean;
  tags?: string[];
}

export type SortOption = 'name' | 'none';

export interface AIToolFilters {
  search: string;
  category: string;
  sort: SortOption;
}
