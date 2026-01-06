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
import { InvestmentTransactionsList } from '@/app/components/ui/InvestmentTransactionsList';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { api } from '@/app/lib/utils/api';
import type { InvestmentRecord } from '@/app/types/pluggy';

export default function InvestmentDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const itemId = params?.itemId as string;
  const investmentId = params?.investmentId as string;
  const [investment, setInvestment] = useState<InvestmentRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (itemId && investmentId) {
      fetchInvestment();
    }
  }, [itemId, investmentId]);

  const fetchInvestment = async () => {
    try {
      const { data: investmentsData } = await api.get('/api/investments', {
        params: { itemId },
      });
      const investments = Array.isArray(investmentsData.data?.results) ? investmentsData.data.results : [];
      const foundInvestment = investments.find((inv: InvestmentRecord) => inv.investment_id === investmentId);
      if (foundInvestment) {
        setInvestment(foundInvestment);
      }
    } catch (error) {
      console.error('Error fetching investment:', error);
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

  if (!investmentId || !investment || !itemId) {
    return (
      <Box minH="100vh" bg="gray.50" py={8}>
        <Container maxW="container.xl">
          <Heading>Investment not found</Heading>
          <Button onClick={() => router.push(`/item/${itemId}/investments`)} variant="ghost" mt={4}>
            Back to Investments
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
              {investment.name || 'Investimento'} - Transações
            </Heading>
            <Button 
              onClick={() => router.push(`/item/${itemId}/investments`)} 
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
          <InvestmentTransactionsList investmentId={investment.investment_id} />
        </ErrorBoundary>
      </Container>
    </Box>
  );
}
