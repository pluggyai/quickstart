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
} from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';
import type { AccountRecord } from '@/app/types/pluggy';

interface AccountsListProps {
  itemId: string;
  onAccountSelect?: (account: AccountRecord) => void;
}

const formatCurrency = (amount: number, currency: string = 'BRL') => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(amount);
};

const getAccountTypeLabel = (type: string) => {
  switch (type) {
    case 'BANK':
      return 'Bank Account';
    case 'CREDIT':
      return 'Credit Card';
    case 'PAYMENT_ACCOUNT':
      return 'Payment Account';
    default:
      return type;
  }
};

const formatAccountSubtype = (subtype?: string) => {
  if (!subtype) return '';
  return subtype.replace(/_/g, ' ');
};

export function AccountsList({ itemId, onAccountSelect }: AccountsListProps) {
  const [accounts, setAccounts] = useState<AccountRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accountsWithBills, setAccountsWithBills] = useState<Set<string>>(new Set());
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAccounts = async () => {
      if (!itemId) {
        setIsLoading(false);
        setAccounts([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/accounts', {
          params: { itemId, page, pageSize },
        });

        const responseData = data.data;
        const accountsData = responseData?.results || (Array.isArray(responseData) ? responseData : []);
        setAccounts(accountsData);
        setTotalPages(responseData?.totalPages || 1);

        const creditAccounts = accountsData.filter((account: AccountRecord) => account.type === 'CREDIT');
        if (creditAccounts.length > 0) {
          const billsChecks = await Promise.allSettled(
            creditAccounts.map(async (account: AccountRecord) => {
              try {
                const { data: billsData } = await api.get('/api/bills', {
                  params: { accountId: account.id },
                });
                
                const bills = billsData.data?.results || (Array.isArray(billsData.data) ? billsData.data : []);
                return { accountId: account.id, hasBills: bills.length > 0 };
              } catch (err) {
                console.error(`Error fetching bills for account ${account.id}:`, err);
                return { accountId: account.id, hasBills: false };
              }
            })
          );

          const accountsWithBillsSet = new Set<string>();
          billsChecks.forEach((result) => {
            if (result.status === 'fulfilled' && result.value.hasBills) {
              accountsWithBillsSet.add(result.value.accountId);
            }
          });
          setAccountsWithBills(accountsWithBillsSet);
        }
      } catch (err) {
        console.error('Error fetching accounts:', err);
        setError(err instanceof Error ? err.message : 'Failed to load accounts');
        setAccounts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccounts();
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
          Carregando contas...
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
          Erro ao carregar contas
        </Text>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      </Card.Root>
    );
  }

  if (accounts.length === 0) {
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
          <Text fontSize="4xl" mb={2}>🏦</Text>
        </Box>
        <Text fontWeight="600" fontSize="lg" mb={2} color="gray.700">
          Nenhuma conta encontrada
        </Text>
        <Text color="gray.500" fontSize="sm">
          Este item ainda não possui contas registradas
        </Text>
      </Card.Root>
    );
  }

  return (
    <Box>
      <Stack gap={3}>
        {accounts.map((account) => (
          <Card.Root 
            key={account.id} 
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
                    {account.name}
                  </Text>
                  {account.type && (
                    <Badge 
                      colorScheme={account.type === 'CREDIT' ? 'purple' : 'blue'}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontWeight="600"
                    >
                      {getAccountTypeLabel(account.type)}
                    </Badge>
                  )}
                  {account.subtype && (
                    <Badge 
                      colorScheme="gray"
                      px={2}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                    >
                      {formatAccountSubtype(account.subtype)}
                    </Badge>
                  )}
                </Flex>

                <Stack gap={2}>
                  {account.number && (
                    <Text fontSize="sm" color="gray.600">
                      Número: {account.number}
                    </Text>
                  )}

                  {account.type === 'CREDIT' && account.credit_data && (
                    <>
                      {account.credit_data.level && (
                        <Text fontSize="sm" color="gray.600">
                          Nível: {account.credit_data.level}
                        </Text>
                      )}
                      {account.credit_data.brand && (
                        <Text fontSize="sm" color="gray.600">
                          Bandeira: {account.credit_data.brand}
                        </Text>
                      )}
                    </>
                  )}
                </Stack>
              </Box>

              <Box textAlign="right" minW="140px">
                <Text fontSize="2xl" fontWeight="700" color={(account.balance ?? 0) >= 0 ? "green.600" : "red.600"} mb={1}>
                  {formatCurrency(account.balance ?? 0, account.currency_code || 'BRL')}
                </Text>
                <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">
                  Saldo {account.type === 'CREDIT' ? 'Disponível' : 'Atual'}
                </Text>

                {account.type === 'CREDIT' && account.credit_data?.available_credit_limit !== undefined && (
                  <Text fontSize="sm" color="gray.600" mt={2}>
                    Limite: {formatCurrency(account.credit_data.available_credit_limit, account.currency_code || 'BRL')}
                  </Text>
                )}
              </Box>
            </Flex>

            {onAccountSelect && (
              <Button
                size="sm"
                variant="outline"
                mt={4}
                onClick={() => onAccountSelect(account)}
                width="full"
                borderRadius="lg"
                fontWeight="600"
                disabled={account.type === 'CREDIT' && !accountsWithBills.has(account.id)}
                _hover={{
                  bg: "gray.50",
                  borderColor: "gray.300",
                }}
              >
                {account.type === 'CREDIT' && accountsWithBills.has(account.id)
                  ? 'Ver Faturas'
                  : account.type === 'CREDIT'
                    ? 'Ver Transações'
                    : 'Ver Transações'}
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