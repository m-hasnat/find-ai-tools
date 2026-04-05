import { gql } from '@apollo/client';

export const getAITools = gql`
  query GetAITools($search: String, $category: String, $sort: String) {
    aiTools(search: $search, category: $category, sort: $sort) {
      name
      description
      category
      url
      docsUrl
      icon
      pricing
      apiAvailable
      tags
    }
  }
`;