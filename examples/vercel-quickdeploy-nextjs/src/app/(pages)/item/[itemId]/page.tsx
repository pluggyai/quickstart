"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Container,
  Heading,
  Button,
  Flex,
  Tabs,
  Spinner,
  Text,
  Card,
} from "@chakra-ui/react";
import { AccountsList } from "@/app/components/ui/AccountsList";
import { IdentityDisplay } from "@/app/components/ui/IdentityDisplay";
import { InvestmentsList } from "@/app/components/ui/InvestmentsList";
import { LoansList } from "@/app/components/ui/LoansList";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { api } from "@/app/lib/utils/api";
import type {
  AccountRecord,
  InvestmentRecord,
  LoanRecord,
  PluggyItemRecord,
} from "@/app/types/pluggy";

export default function ItemDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const itemId = params?.itemId as string;
  const [item, setItem] = useState<PluggyItemRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("accounts");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const segments = path.split("/").filter(Boolean);
      const lastSegment = segments[segments.length - 1];
      if (["accounts", "investments", "loans", "identity"].includes(lastSegment)) {
        setActiveTab(lastSegment);
      } else {
        setActiveTab("accounts");
      }
    }
  }, []);

  useEffect(() => {
    if (itemId) {
      fetchItem();
    }
  }, [itemId]);

  const fetchItem = async () => {
    try {
      const { data } = await api.get("/api/items");
      const items = Array.isArray(data.data?.results) ? data.data.results : [];
      const foundItem = items.find(
        (i: PluggyItemRecord) => i.item_id === itemId
      );
      setItem(foundItem || null);
    } catch (error) {
      console.error("Error fetching item:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAccountSelect = (account: AccountRecord) => {
    router.push(`/item/${itemId}/account/${account.account_id}`);
  };

  const handleInvestmentSelect = (investment: InvestmentRecord) => {
    router.push(`/item/${itemId}/investments/${investment.investment_id}`);
  };

  const handleLoanSelect = (loan: LoanRecord) => {
    router.push(`/item/${itemId}/loans/${loan.loan_id}`);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", `/item/${itemId}/${value}`);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50">
      <Box bg="white" borderBottomWidth="1px" borderColor="gray.200" mb={8}>
        <Container maxW="container.xl" py={6}>
          <Flex justify="space-between" align="center">
            <Heading size="xl" fontWeight="700" color="gray.900">
              {item?.connector_name || (isLoading ? "Carregando..." : "Item Details")}
            </Heading>
            <Button 
              onClick={() => router.push("/")} 
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
        {isLoading ? (
          <Flex justify="center" align="center" minH="400px" direction="column" gap={4}>
            <Spinner size="xl" color="red.500" />
            <Text color="gray.500" fontSize="sm" fontWeight="500">
              Carregando...
            </Text>
          </Flex>
        ) : !itemId || !item ? (
          <Card.Root p={8} borderRadius="xl" borderWidth="1px" borderColor="red.200" bg="red.50" textAlign="center">
            <Text color="red.600" fontWeight="600" mb={2}>
              Item não encontrado
            </Text>
            <Button onClick={() => router.push("/")} variant="ghost" mt={4} colorScheme="red">
              ← Voltar para Items
            </Button>
          </Card.Root>
        ) : (
          <ErrorBoundary>
            <Tabs.Root
              value={activeTab}
              onValueChange={(details) => {
                const value = typeof details === "string" ? details : details.value;
                handleTabChange(value);
              }}
            >
            <Tabs.List
              p={1}
              borderRadius="lg"
              mb={6}
            >
              <Tabs.Trigger 
                value="accounts"
                _selected={{
                  color: "black",
                  fontWeight: "600",
                }}
                px={6}
                py={2}
                borderRadius="md"
              >
                Contas
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="investments"
                _selected={{
                  color: "black",
                  fontWeight: "600",
                }}
                px={6}
                py={2}
                borderRadius="md"
              >
                Investimentos
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="loans"
                _selected={{
                  color: "black",
                  fontWeight: "600",
                }}
                px={6}
                py={2}
                borderRadius="md"
              >
                Empréstimos
              </Tabs.Trigger>
              <Tabs.Trigger 
                value="identity"
                _selected={{
                  color: "black",
                  fontWeight: "600",
                }}
                px={6}
                py={2}
                borderRadius="md"
              >
                Identidade
              </Tabs.Trigger>
            </Tabs.List>

              <Tabs.Content value="accounts" pt={4}>
                <ErrorBoundary>
                  <AccountsList
                    itemId={item.item_id}
                    onAccountSelect={handleAccountSelect}
                  />
                </ErrorBoundary>
              </Tabs.Content>

              <Tabs.Content value="investments" pt={4}>
                <ErrorBoundary>
                  <InvestmentsList
                    itemId={item.item_id}
                    onInvestmentSelect={handleInvestmentSelect}
                  />
                </ErrorBoundary>
              </Tabs.Content>

              <Tabs.Content value="loans" pt={4}>
                <ErrorBoundary>
                  <LoansList
                    itemId={item.item_id}
                    onLoanSelect={handleLoanSelect}
                  />
                </ErrorBoundary>
              </Tabs.Content>

              <Tabs.Content value="identity" pt={4}>
                <ErrorBoundary>
                  <IdentityDisplay itemId={item.item_id} />
                </ErrorBoundary>
              </Tabs.Content>
            </Tabs.Root>
          </ErrorBoundary>
        )}
      </Container>
    </Box>
  );
}
