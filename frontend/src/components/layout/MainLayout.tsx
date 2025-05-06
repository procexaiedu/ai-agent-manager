'use client'

import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box>
      <Sidebar />
      <Topbar />
      <Box 
        as="main" 
        ml="250px" // Margin left to accommodate fixed Sidebar
        mt="60px" // Margin top to accommodate fixed Topbar
        p={6} // Padding for content area
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
