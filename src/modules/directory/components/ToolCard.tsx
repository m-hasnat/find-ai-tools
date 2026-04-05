import React, { useState } from 'react';
import { Box, Badge, Text, Heading, Button, HStack, VStack, Link } from '@chakra-ui/react';
import { AITool } from '../types/AITools';

interface ToolCardProps {
  tool: AITool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      cursor="pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      h={isExpanded ? 'auto' : '140px'}
      overflow="hidden"
      bg="white"
      _hover={{ borderColor: 'teal.400' }}
    >
      <HStack justify="space-between" align="start" mb={3}>
        <Heading size="sm">{tool.icon} {tool.name}</Heading>
        <HStack flexShrink={0}>
          <Badge colorPalette="blue">{tool.category}</Badge>
          {tool.pricing && <Badge colorPalette="green">{tool.pricing}</Badge>}
        </HStack>
      </HStack>

      <Text fontSize="sm" color="gray.500" lineClamp={isExpanded ? undefined : 2}>
        {tool.description}
      </Text>

      {isExpanded && (
        <VStack align="start" mt={3} gap={2}>
          {tool.apiAvailable !== undefined && (
            <Text fontSize="sm">
              API: {tool.apiAvailable ? '✅' : '❌'}
            </Text>
          )}
          {tool.tags && (
            <HStack flexWrap="wrap">
              {tool.tags.map((tag) => (
                <Badge key={tag} colorPalette="gray">{tag}</Badge>
              ))}
            </HStack>
          )}
          <HStack>
            <Link href={tool.url} target="_blank" onClick={(e) => e.stopPropagation()}>
              <Button size="sm">Visit Tool</Button>
            </Link>
            {tool.docsUrl && (
              <Link href={tool.docsUrl} target="_blank" onClick={(e) => e.stopPropagation()}>
                <Button size="sm" variant="outline">Docs</Button>
              </Link>
            )}
          </HStack>
        </VStack>
      )}
    </Box>
  );
};