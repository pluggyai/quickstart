'use client';

import {
  Box,
  Card,
  Text,
  Flex,
  Badge,
  Stack,
  Heading,
} from '@chakra-ui/react';
import type { LoanRecord } from '@/app/types/pluggy';

interface LoanDetailsProps {
  loan: LoanRecord;
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

export function LoanDetails({ loan }: LoanDetailsProps) {
  return (
    <Card.Root 
      p={8}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.200"
      bg="white"
      shadow="sm"
    >
      <Stack gap={8}>
        {/* Header */}
        <Box>
          <Flex justify="space-between" align="start" mb={4}>
            <Box>
              <Heading size="xl" mb={3} fontWeight="700" color="gray.900">
                {loan.product_name || 'Detalhes do Empréstimo'}
              </Heading>
              {loan.type && (
                <Badge 
                  colorScheme="orange" 
                  size="lg"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontWeight="600"
                >
                  {loan.subtype 
                    ? loan.subtype.replace(/_/g, ' ')
                    : getLoanTypeLabel(loan.type)}
                </Badge>
              )}
            </Box>
          </Flex>
        </Box>

        {/* Basic Information */}
        <Box>
          <Heading size="md" mb={4} color="gray.900" fontWeight="700">
            Informações do Empréstimo
          </Heading>
          
          <Stack gap={3}>
            {loan.contract_number && (
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Número do contrato:</Text>
                <Text fontWeight="500" color="gray.900">{loan.contract_number}</Text>
              </Flex>
            )}

            {loan.contracted_amount !== undefined && loan.contracted_amount !== null && (
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Valor contratado:</Text>
                <Text fontWeight="700" color="gray.900" fontSize="lg">
                  {formatCurrency(loan.contracted_amount, loan.currency_code || 'BRL')}
                </Text>
              </Flex>
            )}

            {loan.current_debt_amount !== undefined && loan.current_debt_amount !== null && (
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Valor atual da dívida:</Text>
                <Text fontWeight="700" color="red.600" fontSize="lg">
                  {formatCurrency(loan.current_debt_amount, loan.currency_code || 'BRL')}
                </Text>
              </Flex>
            )}

            {loan.outstanding_balance !== undefined && loan.outstanding_balance !== null && (
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Saldo devedor:</Text>
                <Text fontWeight="700" color="gray.900">
                  {formatCurrency(loan.outstanding_balance, loan.currency_code || 'BRL')}
                </Text>
              </Flex>
            )}

            {loan.date && (
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Data:</Text>
                <Text fontWeight="500" color="gray.900">{formatDate(loan.date)}</Text>
              </Flex>
            )}

            {loan.due_date && (
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Data de vencimento:</Text>
                <Text fontWeight="500" color="gray.900">{formatDate(loan.due_date)}</Text>
              </Flex>
            )}
          </Stack>
        </Box>

        {/* Installments */}
        {loan.installments_quantity && (
          <Box>
            <Heading size="md" mb={4} color="gray.900" fontWeight="700">
              Parcelas
            </Heading>
            
            <Stack gap={3}>
              <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                <Text fontWeight="600" color="gray.700" fontSize="sm">Parcelas a pagar:</Text>
                <Text fontWeight="500" color="gray.900">{loan.installments_quantity}</Text>
              </Flex>

              {loan.installments_value && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Valor da parcela:</Text>
                  <Text fontWeight="700" color="gray.900">
                    {formatCurrency(loan.installments_value, loan.currency_code || 'BRL')}
                  </Text>
                </Flex>
              )}

              {loan.payment_date && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Data de pagamento:</Text>
                  <Text fontWeight="500" color="gray.900">{formatDate(loan.payment_date)}</Text>
                </Flex>
              )}
            </Stack>
          </Box>
        )}

        {/* Interest */}
        {(loan.interest_rate !== undefined || loan.interest_amount !== undefined) && (
          <Box>
            <Heading size="md" mb={4} color="gray.900" fontWeight="700">
              Informações de Juros
            </Heading>
            
            <Stack gap={3}>
              {loan.interest_rate !== undefined && loan.interest_rate !== null && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Taxa de juros remuneratórios (mensal):</Text>
                  <Text fontWeight="600" color="gray.900">{(loan.interest_rate * 100).toFixed(2)}%</Text>
                </Flex>
              )}

              {loan.interest_rate_type && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Tipo de taxa:</Text>
                  <Badge colorScheme="blue" px={3} py={1} borderRadius="full" fontWeight="600">{loan.interest_rate_type}</Badge>
                </Flex>
              )}

              {loan.interest_amount !== undefined && loan.interest_amount !== null && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Valor dos juros:</Text>
                  <Text fontWeight="500" color="gray.900">
                    {formatCurrency(loan.interest_amount, loan.currency_code || 'BRL')}
                  </Text>
                </Flex>
              )}
            </Stack>
          </Box>
        )}

        {/* Additional Details */}
        {(loan.borrower || loan.guarantor) && (
          <Box>
            <Heading size="md" mb={4} color="gray.900" fontWeight="700">
              Partes Envolvidas
            </Heading>
            
            <Stack gap={3}>
              {loan.borrower && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Mutuário:</Text>
                  <Text fontWeight="500" color="gray.900">{loan.borrower}</Text>
                </Flex>
              )}

              {loan.guarantor && (
                <Flex justify="space-between" align="center" py={2} borderBottomWidth="1px" borderColor="gray.100">
                  <Text fontWeight="600" color="gray.700" fontSize="sm">Fiador:</Text>
                  <Text fontWeight="500" color="gray.900">{loan.guarantor}</Text>
                </Flex>
              )}
            </Stack>
          </Box>
        )}
      </Stack>
    </Card.Root>
  );
}