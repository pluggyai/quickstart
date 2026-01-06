'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ConnectButton } from '@/app/components/ui/ConnectButton';
import { ItemsList } from '@/app/components/ui/ItemsList';

export default function HomePage() {
  const router = useRouter();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const handleError = (message: string) => {
    console.error('Connection error:', message);
  };

  const handleItemSelect = (item: { item_id: string }) => {
    router.push(`/item/${item.item_id}/accounts`);
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <Box bg="white" borderBottomWidth="1px" borderColor="gray.200" mb={8}>
        <Container maxW="container.xl" py={6}>
          <Flex justify="space-between" align="center">
            <Box>
              <Heading size="2xl" mb={2} fontWeight="700" color="gray.900">
                Pluggy Financial Dashboard
              </Heading>
              <Text color="gray.600" fontSize="md">
                Connect and manage your financial accounts
              </Text>
            </Box>
            
            <ConnectButton
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" pb={12}>
        <ItemsList
          onItemSelect={handleItemSelect}
          refreshTrigger={refreshTrigger}
        />
      </Container>
    </Box>
  );
}