'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Text,
  Flex,
  Badge,
  Stack,
  Spinner,
  Button,
  Heading
} from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';
import type { TransactionRecord } from '@/app/types/pluggy';

interface TransactionsListProps {
  accountId: string;
}

const formatCurrency = (amount: number, currency: string = 'BRL') => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount);
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export function TransactionsList({ accountId }: TransactionsListProps) {
  const [transactions, setTransactions] = useState<TransactionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(50);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!accountId) {
      setIsLoading(false);
      setTransactions([]);
      return;
    }

    const fetchTransactions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/transactions', {
          params: { accountId, page, pageSize },
        });

        const responseData = data.data;
        setTransactions(responseData.results || []);
        setTotalPages(responseData.totalPages || 1);
      } catch (err) {
        console.error('Error fetching transactions:', err);
        setError(err instanceof Error ? err.message : 'Failed to load transactions');
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [accountId, page, pageSize]);

  const loadNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const loadPrevious = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="300px" direction="column" gap={4}>
        <Spinner size="xl" color="red.500" />
        <Text color="gray.500" fontSize="sm" fontWeight="500">
          Carregando transações...
        </Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Card.Root 
        p={8}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="red.200"
        bg="red.50"
        textAlign="center"
      >
        <Text color="red.600" fontWeight="600" mb={2}>
          Erro ao carregar transações
        </Text>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      </Card.Root>
    );
  }

  if (transactions.length === 0) {
    return (
      <Card.Root 
        p={12}
        borderRadius="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
        bg="gray.50"
        textAlign="center"
      >
        <Box mb={4}>
          <Text fontSize="4xl" mb={2}>📊</Text>
        </Box>
        <Heading size="md" mb={2} color="gray.700" fontWeight="600">
          Nenhuma transação encontrada
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Esta conta ainda não possui transações registradas
        </Text>
      </Card.Root>
    );
  }

  return (
    <Box>
      <Stack gap={3}>
        {transactions.map((transaction) => (
          <Card.Root 
            key={transaction.transaction_id} 
            p={5}
            borderRadius="lg"
            borderWidth="1px"
            borderColor="gray.200"
            bg="white"
            shadow="sm"
            _hover={{
              shadow: "md",
              borderColor: "gray.300",
            }}
            transition="all 0.2s"
          >
            <Flex justify="space-between" align="start" gap={4}>
              <Box flex={1} minW={0}>
                <Flex align="start" gap={3} mb={2}>
                  <Box
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={transaction.amount < 0 ? 'red.500' : 'green.500'}
                    mt={2}
                    flexShrink={0}
                  />
                  <Box flex={1} minW={0}>
                    <Text fontWeight="600" mb={1} color="gray.900" fontSize="md">
                      {transaction.description || 'Sem descrição'}
                    </Text>
                    
                    {transaction.description_raw && transaction.description_raw !== transaction.description && (
                      <Text fontSize="xs" color="gray.500" mb={2}>
                        {transaction.description_raw}
                      </Text>
                    )}
                  </Box>
                </Flex>
                
                <Flex gap={2} align="center" flexWrap="wrap" ml={5}>
                  <Text fontSize="sm" color="gray.600" fontWeight="500">
                    {formatDate(transaction.date)}
                  </Text>
                  
                  {transaction.category && (
                    <Badge 
                      size="sm" 
                      colorScheme="blue"
                      px={2}
                      py={0.5}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      {transaction.category}
                    </Badge>
                  )}
                  
                  {transaction.status && (
                    <Badge 
                      size="sm" 
                      colorScheme={transaction.status === 'POSTED' ? 'green' : 'orange'}
                      px={2}
                      py={0.5}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      {transaction.status}
                    </Badge>
                  )}
                </Flex>
              </Box>

              <Box textAlign="right" ml={4} minW="120px">
                <Text 
                  fontSize="xl" 
                  fontWeight="700"
                  color={transaction.amount < 0 ? 'red.600' : 'green.600'}
                  mb={1}
                >
                  {formatCurrency(transaction.amount, transaction.currency_code || 'BRL')}
                </Text>
                
                {transaction.balance !== undefined && transaction.balance !== null && (
                  <Text fontSize="xs" color="gray.500" fontWeight="500">
                    Saldo: {formatCurrency(transaction.balance, transaction.currency_code || 'BRL')}
                  </Text>
                )}
              </Box>
            </Flex>
          </Card.Root>
        ))}
      </Stack>

      <Flex justify="space-between" align="center" mt={6} pt={4} borderTopWidth="1px" borderColor="gray.200">
        <Button 
          onClick={loadPrevious} 
          size="sm" 
          variant="outline"
          disabled={page === 1}
          borderRadius="lg"
          fontWeight="600"
          _hover={{
            bg: "gray.50",
          }}
        >
          ← Anterior
        </Button>

        <Text fontSize="sm" color="gray.600" fontWeight="500">
          Página {page} de {totalPages} • {transactions.length} transações
        </Text>

        <Button 
          onClick={loadNext} 
          size="sm" 
          variant="outline"
          disabled={page >= totalPages}
          borderRadius="lg"
          fontWeight="600"
          _hover={{
            bg: "gray.50",
          }}
        >
          Próxima →
        </Button>
      </Flex>
    </Box>
  );
}