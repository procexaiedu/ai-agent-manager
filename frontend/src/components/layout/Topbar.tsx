'use client'

import { Box, Flex, Heading, Spacer, Avatar } from '@chakra-ui/react';

const Topbar = () => {
  // Placeholder for dynamic heading based on route
  const currentPageTitle = 'Dashboard'; // Replace with logic to get current page title

  return (
    <Box
      as="header"
      position="fixed" // Fixed position
      top={0}
      left="250px" // Offset by Sidebar width
      right={0}
      h="60px" // Topbar height
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex="sticky" // Ensure it stays above scrolling content if needed
    >
      <Flex 
        align="center" 
        h="100%" 
        px={4}
      >
        <Heading size="lg">{currentPageTitle}</Heading>
        <Spacer />
        {/* Placeholder for User menu/avatar */}
        <Avatar name="User Name" size="sm" />
      </Flex>
    </Box>
  );
};

export default Topbar;
