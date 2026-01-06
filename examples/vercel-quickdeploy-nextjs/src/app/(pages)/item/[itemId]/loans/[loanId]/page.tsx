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
import { LoanDetails } from '@/app/components/ui/LoanDetails';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { api } from '@/app/lib/utils/api';
import type { LoanRecord } from '@/app/types/pluggy';

export default function LoanDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const itemId = params?.itemId as string;
  const loanId = params?.loanId as string;
  const [loan, setLoan] = useState<LoanRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (itemId && loanId) {
      fetchLoan();
    }
  }, [itemId, loanId]);

  const fetchLoan = async () => {
    try {
      const { data: loansData } = await api.get('/api/loans', {
        params: { itemId },
      });
      const loans = Array.isArray(loansData.data?.results) ? loansData.data.results : [];
      const foundLoan = loans.find((l: LoanRecord) => l.loan_id === loanId);
      if (foundLoan) {
        setLoan(foundLoan);
      }
    } catch (error) {
      console.error('Error fetching loan:', error);
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

  if (!loanId || !loan || !itemId) {
    return (
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <Heading>Loan not found</Heading>
          <Button onClick={() => router.push(`/item/${itemId}/loans`)} variant="ghost" mt={4}>
            Back to Loans
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
              {loan.product_name || 'Empréstimo'} - Detalhes
            </Heading>
            <Button 
              onClick={() => router.push(`/item/${itemId}/loans`)} 
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
          <LoanDetails loan={loan} />
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
