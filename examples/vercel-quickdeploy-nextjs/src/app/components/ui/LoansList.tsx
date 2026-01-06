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
import type { LoanRecord } from '@/app/types/pluggy';

interface LoansListProps {
  itemId: string;
  onLoanSelect?: (loan: LoanRecord) => void;
}

const formatCurrency = (amount: number, currency: string = 'BRL') => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount);
};

const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const getLoanTypeLabel = (type?: string) => {
  if (!type) return 'Loan';
  return type.replace(/_/g, ' ');
};

const formatLoanSubtype = (subtype?: string) => {
  if (!subtype) return '';
  return subtype.replace(/_/g, ' ');
};

export function LoansList({ itemId, onLoanSelect }: LoansListProps) {
  const [loans, setLoans] = useState<LoanRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!itemId) {
      setIsLoading(false);
      setLoans([]);
      return;
    }

    const fetchLoans = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/loans', {
          params: { itemId, page, pageSize },
        });
        
        const responseData = data.data;
        setLoans(Array.isArray(responseData?.results) ? responseData.results : []);
        setTotalPages(responseData?.totalPages || 1);
      } catch (err) {
        console.error('Error fetching loans:', err);
        setError(err instanceof Error ? err.message : 'Failed to load loans');
        setLoans([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoans();
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
          Carregando empréstimos...
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
          Erro ao carregar empréstimos
        </Text>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      </Card.Root>
    );
  }

  if (loans.length === 0) {
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
          <Text fontSize="4xl" mb={2}>💰</Text>
        </Box>
        <Heading size="md" mb={2} color="gray.700" fontWeight="600">
          Nenhum empréstimo encontrado
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Este item ainda não possui empréstimos registrados
        </Text>
      </Card.Root>
    );
  }

  return (
    <Box>
      <Stack gap={4}>
        {loans.map((loan) => (
          <Card.Root 
            key={loan.loan_id} 
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
                    {loan.product_name || 'Empréstimo'}
                  </Text>
                  {loan.type && (
                    <Badge 
                      colorScheme="orange"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      {loan.subtype 
                        ? formatLoanSubtype(loan.subtype)
                        : getLoanTypeLabel(loan.type)}
                    </Badge>
                  )}
                </Flex>

                <Stack gap={2}>
                  {loan.contract_number && (
                    <Text fontSize="sm" color="gray.600">
                      Contrato: {loan.contract_number}
                    </Text>
                  )}

                  {loan.date && (
                    <Text fontSize="sm" color="gray.600">
                      Data: {formatDate(loan.date)}
                    </Text>
                  )}

                  {loan.due_date && (
                    <Text fontSize="sm" color="gray.600">
                      Vencimento: {formatDate(loan.due_date)}
                    </Text>
                  )}

                  {loan.installments_quantity && (
                    <Text fontSize="sm" color="gray.600" fontWeight="500">
                      Parcelas: {loan.installments_quantity}
                    </Text>
                  )}

                  {loan.interest_rate !== undefined && loan.interest_rate !== null && (
                    <Text fontSize="sm" color="gray.600">
                      Taxa de juros: {(loan.interest_rate * 100).toFixed(2)}%
                    </Text>
                  )}
                </Stack>
              </Box>

              <Box textAlign="right" minW="140px">
                <Text fontSize="2xl" fontWeight="700" color="orange.600" mb={1}>
                  {formatCurrency(
                    loan.contracted_amount ?? loan.principal_amount ?? 0,
                    loan.currency_code || 'BRL'
                  )}
                </Text>
                <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={2}>
                  Valor Contratado
                </Text>

                {loan.current_debt_amount !== undefined && loan.current_debt_amount !== null && (
                  <>
                    <Text fontSize="lg" fontWeight="700" color="red.600" mb={1}>
                      {formatCurrency(
                        loan.current_debt_amount,
                        loan.currency_code || 'BRL'
                      )}
                    </Text>
                    <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">
                      Dívida Atual
                    </Text>
                  </>
                )}

                {loan.outstanding_balance !== undefined && loan.outstanding_balance !== null && (
                  <Text fontSize="sm" color="gray.600" mt={2}>
                    Saldo devedor: {formatCurrency(
                      loan.outstanding_balance,
                      loan.currency_code || 'BRL'
                    )}
                  </Text>
                )}
              </Box>
            </Flex>

            {onLoanSelect && (
              <Button
                size="sm"
                variant="outline"
                mt={4}
                onClick={() => onLoanSelect(loan)}
                width="full"
                borderRadius="lg"
                fontWeight="600"
                _hover={{
                  bg: "gray.50",
                  borderColor: "gray.300",
                }}
              >
                Ver Detalhes
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