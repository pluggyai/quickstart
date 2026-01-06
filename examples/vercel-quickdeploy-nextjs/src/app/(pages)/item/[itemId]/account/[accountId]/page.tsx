'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import { TransactionsList } from '@/app/components/ui/TransactionsList';
import { CreditCardBillsList } from '@/app/components/ui/CreditCardBillsList';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { api } from '@/app/lib/utils/api';
import type { AccountRecord } from '@/app/types/pluggy';

export default function AccountDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const itemId = params?.itemId as string;
  const accountId = params?.accountId as string;
  const [account, setAccount] = useState<AccountRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (itemId && accountId) {
      fetchAccount();
    }
  }, [itemId, accountId]);

  const fetchAccount = async () => {
    try {
      const { data: accountsData } = await api.get('/api/accounts', {
        params: { itemId },
      });
      const accounts = accountsData.data?.results || (Array.isArray(accountsData.data) ? accountsData.data : []);
      const foundAccount = accounts.find((a: AccountRecord) => a.account_id === accountId);
      if (foundAccount) {
        setAccount(foundAccount);
      }
    } catch (error) {
      console.error('Error fetching account:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <Flex justify="center" align="center" minH="200px">
            <Spinner size="xl" />
          </Flex>
        </Container>
      </Box>
    );
  }

  if (!accountId || !account || !itemId) {
    return (
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <Heading>Account not found</Heading>
          <Button onClick={() => router.push(`/item/${itemId}/accounts`)} variant="ghost" mt={4}>
            Back to Accounts
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="gray.50">
      <Box bg="white" borderBottomWidth="1px" borderColor="gray.200" mb={8}>
        <Container maxW="container.xl" py={6}>
          <Flex justify="space-between" align="center">
            <Heading size="xl" fontWeight="700" color="gray.900">
              {account.name || 'Conta'} - {account.type === 'CREDIT' ? 'Faturas' : 'Transações'}
            </Heading>
            <Button 
              onClick={() => router.push(`/item/${itemId}/accounts`)} 
              variant="ghost"
              size="sm"
              color="gray.600"
              _hover={{ bg: "gray.100" }}
            >
              ← Voltar
            </Button>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" pb={12}>
        <ErrorBoundary>
          {account.type === 'CREDIT' ? (
            <CreditCardBillsList accountId={account.account_id} />
          ) : (
            <TransactionsList accountId={account.account_id} />
          )}
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
