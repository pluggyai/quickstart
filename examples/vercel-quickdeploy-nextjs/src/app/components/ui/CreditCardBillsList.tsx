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
} from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';
import type { CreditCardBillRecord } from '@/app/types/pluggy';

interface CreditCardBillsListProps {
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

export function CreditCardBillsList({ accountId }: CreditCardBillsListProps) {
  const [bills, setBills] = useState<CreditCardBillRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accountId) {
      setIsLoading(false);
      setBills([]);
      return;
    }

    const fetchBills = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/bills', {
          params: { accountId },
        });
        
        setBills(Array.isArray(data.data) ? data.data : []);
      } catch (err) {
        console.error('Error fetching bills:', err);
        setError(err instanceof Error ? err.message : 'Failed to load credit card bills');
        setBills([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBills();
  }, [accountId]);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="300px" direction="column" gap={4}>
        <Spinner size="xl" color="red.500" />
        <Text color="gray.500" fontSize="sm" fontWeight="500">
          Carregando faturas...
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
          Erro ao carregar faturas
        </Text>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      </Card.Root>
    );
  }

  return (
    <Stack gap={4}>
      {bills.map((bill) => (
        <Card.Root 
          key={bill.bill_id} 
          p={6}
          borderRadius="xl"
          borderWidth="1px"
          borderColor="gray.200"
          bg="white"
          shadow="sm"
          _hover={{
            shadow: "md",
            borderColor: "purple.300",
          }}
          transition="all 0.2s"
        >
          <Flex justify="space-between" align="start" gap={4}>
            <Box flex={1}>
              <Flex align="center" gap={2} mb={4}>
                <Text fontSize="2xl">💳</Text>
                <Box>
                  <Text fontWeight="700" fontSize="lg" color="gray.900" mb={1}>
                    Fatura {bill.due_date ? formatDate(bill.due_date) : 'Sem data de vencimento'}
                  </Text>
                  {bill.due_date && (
                    <Text fontSize="xs" color="gray.500">
                      Vencimento: {formatDate(bill.due_date)}
                    </Text>
                  )}
                </Box>
              </Flex>
              
              <Stack gap={3}>
                {bill.minimum_payment_amount !== undefined && bill.minimum_payment_amount !== null && (
                  <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                    <Text fontSize="sm" color="gray.600" fontWeight="600">Pagamento mínimo:</Text>
                    <Text fontSize="sm" fontWeight="700" color="gray.900">
                      {formatCurrency(
                        bill.minimum_payment_amount,
                        bill.total_amount_currency_code || 'BRL'
                      )}
                    </Text>
                  </Flex>
                )}

                {bill.allows_installments !== undefined && (
                  <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                    <Text fontSize="sm" color="gray.600" fontWeight="600">Permite parcelamento:</Text>
                    <Badge 
                      colorScheme={bill.allows_installments ? 'green' : 'gray'} 
                      size="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      {bill.allows_installments ? 'Sim' : 'Não'}
                    </Badge>
                  </Flex>
                )}
              </Stack>
            </Box>

            <Box textAlign="right" ml={4} minW="140px">
              <Text fontSize="2xl" fontWeight="700" color="purple.600" mb={1}>
                {formatCurrency(
                  bill.total_amount ?? 0,
                  bill.total_amount_currency_code || 'BRL'
                )}
              </Text>
              <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide" fontWeight="600">
                Valor Total
              </Text>
            </Box>
          </Flex>
        </Card.Root>
      ))}
    </Stack>
  );
}