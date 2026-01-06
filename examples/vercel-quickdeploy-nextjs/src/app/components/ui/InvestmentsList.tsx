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
  Heading,
} from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';
import type { InvestmentRecord } from '@/app/types/pluggy';

interface InvestmentsListProps {
  itemId: string;
  onInvestmentSelect?: (investment: InvestmentRecord) => void;
}

const formatCurrency = (amount: number, currency: string = 'BRL') => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount);
};

const formatPercentage = (value?: number | null) => {
  if (value === undefined || value === null) return 'N/A';
  return `${(value * 100).toFixed(2)}%`;
};

const getInvestmentTypeLabel = (type?: string) => {
  if (!type) return 'Investment';
  return type.replace(/_/g, ' ');
};

const formatInvestmentSubtype = (subtype?: string) => {
  if (!subtype) return '';
  return subtype.replace(/_/g, ' ');
};

export function InvestmentsList({ itemId, onInvestmentSelect }: InvestmentsListProps) {
  const [investments, setInvestments] = useState<InvestmentRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasTransactionsMap, setHasTransactionsMap] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!itemId) {
      setIsLoading(false);
      setInvestments([]);
      return;
    }

    const fetchInvestments = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/investments', {
          params: { itemId, page, pageSize },
        });

        const responseData = data.data;
        const investmentsData = Array.isArray(responseData?.results) ? responseData.results : [];
        setInvestments(investmentsData);
        setTotalPages(responseData?.totalPages || 1);

        const transactionChecks = await Promise.all(
          investmentsData.map(async (investment: InvestmentRecord) => {
            try {
              const transactionsResponse = await api.get('/api/investment-transactions', {
                params: { investmentId: investment.investment_id, limit: 1 },
              });
              const total = transactionsResponse.data?.data?.total || 0;
              return { investmentId: investment.investment_id, hasData: total > 0 };
            } catch (err) {
              console.error(`Error checking transactions for investment ${investment.investment_id}:`, err);
              return { investmentId: investment.investment_id, hasData: false };
            }
          })
        );

        const transactionsMap: Record<string, boolean> = {};
        transactionChecks.forEach(({ investmentId, hasData }) => {
          transactionsMap[investmentId] = hasData;
        });
        setHasTransactionsMap(transactionsMap);
      } catch (err) {
        console.error('Error fetching investments:', err);
        setError(err instanceof Error ? err.message : 'Failed to load investments');
        setInvestments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInvestments();
  }, [itemId, page, pageSize]);

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
          Carregando investimentos...
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
          Erro ao carregar investimentos
        </Text>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      </Card.Root>
    );
  }

  if (investments.length === 0) {
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
          <Text fontSize="4xl" mb={2}>📈</Text>
        </Box>
        <Heading size="md" mb={2} color="gray.700" fontWeight="600">
          Nenhum investimento encontrado
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Este item ainda não possui investimentos registrados
        </Text>
      </Card.Root>
    );
  }

  return (
    <Box>
      <Stack gap={4}>
        {investments.map((investment) => (
          <Card.Root 
            key={investment.investment_id} 
            p={6}
            borderRadius="xl"
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
              <Box flex={1}>
                <Flex gap={3} align="center" mb={3} flexWrap="wrap">
                  <Text fontWeight="700" fontSize="lg" color="gray.900">
                    {investment.name}
                  </Text>
                  {investment.type && (
                    <Badge 
                      colorScheme="purple"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      {investment.subtype 
                        ? formatInvestmentSubtype(investment.subtype)
                        : getInvestmentTypeLabel(investment.type)}
                    </Badge>
                  )}
                </Flex>

                <Stack gap={2}>
                  {investment.code && (
                    <Text fontSize="sm" color="gray.600">
                      Código: {investment.code}
                    </Text>
                  )}

                  {investment.owner && (
                    <Text fontSize="xs" color="gray.500">
                      Proprietário: {investment.owner}
                    </Text>
                  )}

                  {investment.annual_rate !== undefined && investment.annual_rate !== null && (
                    <Flex gap={2} align="center">
                      <Text fontSize="sm" color="gray.600" fontWeight="500">
                        Taxa anual:
                      </Text>
                      <Text fontSize="sm" color="green.600" fontWeight="700">
                        {formatPercentage(investment.annual_rate)}
                      </Text>
                    </Flex>
                  )}

                  {investment.quantity !== undefined && investment.quantity !== null && (
                    <Text fontSize="sm" color="gray.600">
                      Quantidade: {investment.quantity}
                    </Text>
                  )}
                </Stack>
              </Box>

              <Box textAlign="right" minW="140px">
                <Text fontSize="2xl" fontWeight="700" color="gray.900" mb={1}>
                  {formatCurrency(
                    investment.amount ?? investment.value ?? 0,
                    investment.currency_code || 'BRL'
                  )}
                </Text>
                <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">
                  Saldo
                </Text>

                {investment.value && investment.amount && investment.value !== investment.amount && (
                  <Text fontSize="sm" color="gray.600" mt={2}>
                    Valor: {formatCurrency(investment.value, investment.currency_code || 'BRL')}
                  </Text>
                )}
              </Box>
            </Flex>

            {onInvestmentSelect && (
              <Button
                size="sm"
                variant="outline"
                mt={4}
                onClick={() => onInvestmentSelect(investment)}
                width="full"
                borderRadius="lg"
                fontWeight="600"
                disabled={!hasTransactionsMap[investment.investment_id]}
                opacity={hasTransactionsMap[investment.investment_id] ? 1 : 0.5}
                cursor={hasTransactionsMap[investment.investment_id] ? "pointer" : "not-allowed"}
                _hover={hasTransactionsMap[investment.investment_id] ? {
                  bg: "gray.50",
                  borderColor: "gray.300",
                } : {}}
                _disabled={{
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
              >
                Ver Transações
              </Button>
            )}
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