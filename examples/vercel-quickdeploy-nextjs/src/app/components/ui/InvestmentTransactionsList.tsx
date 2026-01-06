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
import type { InvestmentTransactionRecord } from '@/app/types/pluggy';

interface InvestmentTransactionsListProps {
  investmentId: string;
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

export function InvestmentTransactionsList({ investmentId }: InvestmentTransactionsListProps) {
  const [transactions, setTransactions] = useState<InvestmentTransactionRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(20);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!investmentId) {
      setIsLoading(false);
      setTransactions([]);
      return;
    }

    const fetchTransactions = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/investment-transactions', {
          params: { 
            investmentId, 
            page,
            pageSize,
          },
        });
        
        const responseData = data.data;
        setTransactions(responseData.results || []);
        setTotalPages(responseData.totalPages || 1);
      } catch (err) {
        console.error('Error fetching investment transactions:', err);
        setError(err instanceof Error ? err.message : 'Failed to load transactions');
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [investmentId, page, pageSize]);

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
          Este investimento ainda não possui transações registradas
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
                    bg={transaction.type === 'BUY' ? 'green.500' : 'red.500'}
                    mt="6px"
                    flexShrink={0}
                  />
                  <Box flex={1} minW={0}>
                    <Text fontWeight="600" fontSize="md" color="gray.900" mb={1}>
                      {transaction.type}
                    </Text>
                    <Text fontSize="xs" color="gray.500" fontWeight="500">
                      {formatDate(transaction.date)}
                    </Text>
                  </Box>
                </Flex>

                <Stack gap={1} mt={3}>
                  {transaction.quantity !== undefined && (
                    <Flex gap={2} align="center">
                      <Text fontSize="xs" color="gray.500" fontWeight="500">
                        Quantidade:
                      </Text>
                      <Text fontSize="xs" color="gray.700" fontWeight="600">
                        {transaction.quantity}
                      </Text>
                    </Flex>
                  )}

                  {transaction.value !== undefined && (
                    <Flex gap={2} align="center">
                      <Text fontSize="xs" color="gray.500" fontWeight="500">
                        Preço Unitário:
                      </Text>
                      <Text fontSize="xs" color="gray.700" fontWeight="600">
                        {formatCurrency(transaction.value, transaction.currency_code)}
                      </Text>
                    </Flex>
                  )}
                </Stack>
              </Box>

              <Box textAlign="right" flexShrink={0}>
                <Text
                  fontWeight="700"
                  fontSize="md"
                  color={transaction.amount >= 0 ? 'green.600' : 'red.600'}
                >
                  {formatCurrency(Math.abs(transaction.amount), transaction.currency_code)}
                </Text>
                {transaction.type && (
                  <Badge 
                    mt={2}
                    colorScheme={transaction.type === 'BUY' ? 'green' : 'red'}
                    fontSize="xs"
                    px={2}
                    py={0.5}
                    borderRadius="md"
                  >
                    {transaction.type}
                  </Badge>
                )}
              </Box>
            </Flex>
          </Card.Root>
        ))}
      </Stack>

      {totalPages > 1 && (
        <Flex justify="space-between" align="center" mt={6}>
          <Text fontSize="sm" color="gray.600">
            Página {page} de {totalPages}
          </Text>
          
          <Flex gap={2}>
            <Button
              size="sm"
              onClick={loadPrevious}
              disabled={page === 1}
              variant="outline"
            >
              Anterior
            </Button>
            
            <Button
              size="sm"
              onClick={loadNext}
              disabled={page === totalPages}
              variant="outline"
            >
              Próxima
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}