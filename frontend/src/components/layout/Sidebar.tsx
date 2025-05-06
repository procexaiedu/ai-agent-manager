'use client'

import { Box, Heading, Link, List, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';

const Sidebar = () => {
  return (
    <Box 
      as="aside"
      w="250px" // Sidebar width
      bg="gray.100" // Example background
      p={4} 
      borderRight="1px" 
      borderColor="gray.200"
      h="100vh" // Full viewport height
      position="fixed" // Fixed position
      left={0}
      top={0}
      overflowY="auto" // Add scroll for long content
    >
      <Heading size="md" mb={6} color="teal.600">AI Manager</Heading> 
      <List spacing={3}>
        <ListItem>
          <Link as={NextLink} href="/dashboard" _hover={{ textDecoration: 'none', color: 'teal.500' }}>Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/playground" _hover={{ textDecoration: 'none', color: 'teal.500' }}>Playground</Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/prompt-engineer" _hover={{ textDecoration: 'none', color: 'teal.500' }}>Prompt Engineer</Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/knowledge" _hover={{ textDecoration: 'none', color: 'teal.500' }}>Knowledge</Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/crm" _hover={{ textDecoration: 'none', color: 'teal.500' }}>CRM</Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/inbox" _hover={{ textDecoration: 'none', color: 'teal.500' }}>Inbox</Link>
        </ListItem>
        <ListItem>
          <Heading size="sm" mt={4} mb={2} color="gray.600">Settings</Heading>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/settings/agent" _hover={{ textDecoration: 'none', color: 'teal.500' }}>Agent Config</Link>
        </ListItem>
        <ListItem>
          <Link as={NextLink} href="/settings/system" _hover={{ textDecoration: 'none', color: 'teal.500' }}>System Config</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
